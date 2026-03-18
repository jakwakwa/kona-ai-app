'use client';

import { useState, useEffect, useRef } from 'react';
import { useParams } from 'next/navigation';
import { db } from '@/lib/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { Send, Bot, User, Loader2, AlertCircle } from 'lucide-react';
import clsx from 'clsx';
import Markdown from 'react-markdown';

export default function WidgetPage() {
  const params = useParams();
  const clientId = params.clientId as string;
  
  const [subscriptionActive, setSubscriptionActive] = useState<boolean | null>(null);
  const [businessName, setBusinessName] = useState<string>('AI Assistant');
  const [primaryColour, setPrimaryColour] = useState<string>('#4f46e5'); // Default indigo-600
  const [messages, setMessages] = useState<{ role: 'user' | 'model'; parts: any[] }[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkSubscription = async () => {
      try {
        const clientRef = doc(db, 'clients', clientId);
        const clientSnap = await getDoc(clientRef);
        if (clientSnap.exists()) {
          const data = clientSnap.data();
          setSubscriptionActive(data.subscriptionActive);
          if (data.name) setBusinessName(data.name);
          if (data.primaryColour) setPrimaryColour(data.primaryColour);
        } else {
          setSubscriptionActive(false);
          setError('Client not found.');
        }
      } catch (err) {
        console.error('Error checking subscription:', err);
        setSubscriptionActive(false);
        setError('Error connecting to service.');
      }
    };
    checkSubscription();
  }, [clientId]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || !subscriptionActive || isLoading) return;

    const userMessage = { role: 'user' as const, parts: [{ text: input }] };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);
    setError(null);

    try {
      await processChatRequest(newMessages);
    } catch (err: any) {
      console.error('Chat error:', err);
      setError(err.message || 'An error occurred.');
      setIsLoading(false);
    }
  };

  const processChatRequest = async (currentMessages: any[]) => {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ clientId, messages: currentMessages }),
    });

    if (!res.ok) {
      const data = await res.json();
      throw new Error(data.error || 'Failed to send message');
    }

    if (!res.body) throw new Error('No response body');

    const reader = res.body.getReader();
    const decoder = new TextDecoder();
    let done = false;
    let modelResponseText = '';
    
    // Add an empty model message to append to
    setMessages((prev) => [...prev, { role: 'model', parts: [{ text: '' }] }]);

    while (!done) {
      const { value, done: readerDone } = await reader.read();
      done = readerDone;
      if (value) {
        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split('\n\n');
        
        for (const line of lines) {
          if (line.startsWith('data: ')) {
            try {
              const data = JSON.parse(line.slice(6));
              if (data.type === 'text') {
                setMessages((prev) => {
                  const newMsgs = [...prev];
                  const lastMsg = newMsgs[newMsgs.length - 1];
                  if (lastMsg.role === 'model') {
                    lastMsg.parts[0].text = (lastMsg.parts[0].text || '') + data.content;
                  }
                  return newMsgs;
                });
              } else if (data.type === 'tool') {
                // Tool was called and executed on server
                console.log('Tool executed:', data.message);
              }
            } catch (e) {
              console.error('Error parsing stream chunk:', e, line);
            }
          }
        }
      }
    }
    setIsLoading(false);
  };

  if (subscriptionActive === null) {
    return (
      <div className="flex h-screen items-center justify-center bg-white">
        <Loader2 className="h-6 w-6 animate-spin text-zinc-400" />
      </div>
    );
  }

  return (
    <div className="flex h-screen flex-col bg-white font-sans text-zinc-900 m-0 p-0">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-zinc-100 bg-white px-4 py-3 shadow-sm">
        <div className="flex items-center gap-3">
          <div 
            className="flex h-8 w-8 items-center justify-center rounded-full text-white"
            style={{ backgroundColor: primaryColour }}
          >
            <Bot className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-sm font-semibold">{businessName}</h1>
            <p className="text-xs text-zinc-500">
              {subscriptionActive ? 'Online' : 'Offline'}
            </p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-zinc-50">
        {messages.length === 0 && (
          <div className="flex h-full flex-col items-center justify-center text-center text-zinc-500">
            <Bot className="mb-2 h-8 w-8 text-zinc-300" />
            <p className="text-sm">Hi there! How can I help you today?</p>
          </div>
        )}
        
        {messages.map((msg, idx) => {
          // Skip tool messages in UI
          if (msg.parts[0]?.functionCall || msg.parts[0]?.functionResponse) return null;
          
          const isUser = msg.role === 'user';
          return (
            <div key={idx} className={clsx("flex", isUser ? "justify-end" : "justify-start")}>
              <div 
                className={clsx(
                  "max-w-[85%] rounded-2xl px-4 py-2 text-sm shadow-sm",
                  isUser ? "text-white rounded-br-sm" : "bg-white border border-zinc-100 text-zinc-800 rounded-bl-sm"
                )}
                style={isUser ? { backgroundColor: primaryColour } : {}}
              >
                {isUser ? (
                  msg.parts[0].text
                ) : (
                  <div className="prose prose-sm prose-zinc max-w-none">
                    <Markdown>{msg.parts[0].text}</Markdown>
                  </div>
                )}
              </div>
            </div>
          );
        })}
        {isLoading && (
          <div className="flex justify-start">
            <div className="max-w-[85%] rounded-2xl rounded-bl-sm bg-white border border-zinc-100 px-4 py-3 shadow-sm">
              <Loader2 className="h-4 w-4 animate-spin text-zinc-400" />
            </div>
          </div>
        )}
        {error && (
          <div className="flex items-center gap-2 rounded-xl bg-red-50 p-3 text-sm text-red-600">
            <AlertCircle className="h-4 w-4" />
            {error}
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="border-t border-zinc-100 bg-white p-3">
        {!subscriptionActive ? (
          <div className="rounded-xl bg-zinc-100 p-3 text-center text-sm text-zinc-500">
            Chat is currently unavailable.
          </div>
        ) : (
          <form onSubmit={sendMessage} className="relative flex items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              disabled={isLoading}
              className="w-full rounded-full border border-zinc-200 bg-zinc-50 py-3 pl-4 pr-12 text-sm focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-indigo-500 disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="absolute right-1.5 flex h-9 w-9 items-center justify-center rounded-full text-white transition-colors disabled:bg-zinc-300"
              style={{ backgroundColor: (!input.trim() || isLoading) ? undefined : primaryColour }}
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
