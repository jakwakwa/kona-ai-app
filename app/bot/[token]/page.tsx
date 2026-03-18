'use client';

import { useState, useEffect, useRef } from 'react';
import { useParams } from 'next/navigation';
import { db } from '@/lib/firebase';
import { collection, query, where, getDocs, addDoc, updateDoc, doc, arrayUnion, getDoc } from 'firebase/firestore';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Bot, User, Loader2, Calendar } from 'lucide-react';

export default function TenantBot() {
  const params = useParams();
  const token = params.token as string;
  
  const [config, setConfig] = useState<any>(null);
  const [client, setClient] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [messages, setMessages] = useState<{role: 'user' | 'model', text: string}[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [conversationId, setConversationId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const q = query(collection(db, 'agentConfigs'), where('activationToken', '==', token));
        const snapshot = await getDocs(q);
        if (snapshot.empty) {
          setError('Invalid activation token.');
          setLoading(false);
          return;
        }
        
        const configData = snapshot.docs[0].data();
        if (!configData.isActive) {
          setError('This agent is currently inactive.');
          setLoading(false);
          return;
        }

        // Fetch client subscription status
        const clientDoc = await getDoc(doc(db, 'clients', configData.clientId));
        if (!clientDoc.exists()) {
          setError('Client account not found.');
          setLoading(false);
          return;
        }
        
        const clientData = clientDoc.data();
        setClient(clientData);
        
        if (!clientData.subscriptionActive) {
          setError('Assistant offline: Please check subscription status.');
          setLoading(false);
          return;
        }
        
        setConfig(configData);
        const initialMessage = { role: 'model' as const, text: 'Hello! How can I help you today?', timestamp: new Date().toISOString() };
        setMessages([{ role: initialMessage.role, text: initialMessage.text }]);
        
        // Create initial conversation document
        const convRef = await addDoc(collection(db, 'conversations'), {
          clientId: configData.clientId,
          activationToken: token,
          messages: [initialMessage],
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        });
        setConversationId(convRef.id);
        
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError('Failed to load agent configuration.');
        setLoading(false);
      }
    };

    if (token) {
      fetchConfig();
    }
  }, [token]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim() || !config || !conversationId || !client?.subscriptionActive) return;
    
    const userMessageText = input.trim();
    const userMessage = { role: 'user' as const, text: userMessageText, timestamp: new Date().toISOString() };
    setInput('');
    setMessages(prev => [...prev, { role: userMessage.role, text: userMessage.text }]);
    setIsTyping(true);

    // Save user message to Firestore
    try {
      await updateDoc(doc(db, 'conversations', conversationId), {
        messages: arrayUnion(userMessage),
        updatedAt: new Date().toISOString()
      });
    } catch (err) {
      console.error('Error saving user message:', err);
    }

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, { role: 'user', text: userMessageText }],
          clientId: config.clientId,
          activationToken: token
        })
      });

      if (!response.ok) {
        throw new Error('Failed to fetch response from proxy');
      }

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      let modelMessageText = '';
      
      // Add empty model message to start streaming into
      setMessages(prev => [...prev, { role: 'model', text: '' }]);

      while (true) {
        const { done, value } = await reader?.read() || { done: true, value: undefined };
        if (done) break;
        
        const chunk = decoder.decode(value);
        modelMessageText += chunk;
        
        setMessages(prev => {
          const newMessages = [...prev];
          newMessages[newMessages.length - 1].text = modelMessageText;
          return newMessages;
        });
      }

      const modelMessage = { role: 'model' as const, text: modelMessageText, timestamp: new Date().toISOString() };
      
      // Save model message to Firestore
      try {
        await updateDoc(doc(db, 'conversations', conversationId), {
          messages: arrayUnion(modelMessage),
          updatedAt: new Date().toISOString()
        });
      } catch (err) {
        console.error('Error saving model message:', err);
      }
    } catch (err) {
      console.error('Chat error:', err);
      const errorMessage = { role: 'model' as const, text: 'Sorry, I encountered an error. Please try again later.', timestamp: new Date().toISOString() };
      setMessages(prev => [...prev, { role: errorMessage.role, text: errorMessage.text }]);
    } finally {
      setIsTyping(false);
    }
  };

  if (loading) {
    return <div className="h-screen w-full flex items-center justify-center bg-white"><Loader2 className="w-6 h-6 animate-spin text-indigo-600" /></div>;
  }

  if (error) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-white p-4 text-center">
        <div className="text-slate-500 text-sm">{error}</div>
      </div>
    );
  }

  return (
    <div className="h-screen w-full flex flex-col bg-white font-sans overflow-hidden">
      {/* Header */}
      <header className="bg-indigo-600 text-white p-4 flex items-center gap-3 shrink-0 shadow-sm z-10">
        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
          <Bot className="w-5 h-5" />
        </div>
        <div>
          <h1 className="font-bold text-sm">AI Assistant</h1>
          <div className="text-[10px] text-indigo-200 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Online
          </div>
        </div>
      </header>

      {/* Messages */}
      <main className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
        <AnimatePresence initial={false}>
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className={`flex items-end gap-2 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
            >
              <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'user' ? 'bg-slate-200' : 'bg-indigo-100'}`}>
                {msg.role === 'user' ? <User className="w-3 h-3 text-slate-600" /> : <Bot className="w-3 h-3 text-indigo-600" />}
              </div>
              <div className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm shadow-sm ${
                msg.role === 'user' 
                  ? 'bg-indigo-600 text-white rounded-br-none' 
                  : 'bg-white text-slate-700 border border-slate-100 rounded-bl-none'
              }`}>
                {msg.text}
              </div>
            </motion.div>
          ))}
          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-end gap-2"
            >
              <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center shrink-0">
                <Bot className="w-3 h-3 text-indigo-600" />
              </div>
              <div className="bg-white border border-slate-100 rounded-2xl rounded-bl-none px-4 py-3 shadow-sm flex gap-1">
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div ref={messagesEndRef} />
      </main>

      {/* Input */}
      <footer className="p-3 bg-white border-t border-slate-100 shrink-0">
        <form 
          onSubmit={(e) => { e.preventDefault(); handleSend(); }}
          className="flex items-center gap-2"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 bg-slate-50 border border-slate-200 rounded-full px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
            disabled={isTyping}
          />
          <button
            type="submit"
            disabled={!input.trim() || isTyping}
            className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center shrink-0 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-indigo-700 transition-colors shadow-sm"
          >
            <Send className="w-4 h-4 ml-0.5" />
          </button>
        </form>
        <div className="text-center mt-2">
          <span className="text-[10px] text-slate-400 font-medium">Powered by Kona AI</span>
        </div>
      </footer>
    </div>
  );
}
