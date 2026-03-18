'use client';

import { useState, useEffect } from 'react';
import AuthGuard from '@/components/AuthGuard';
import { auth, db } from '@/lib/firebase';
import { doc, getDoc, setDoc, updateDoc, collection, query, where, getDocs, serverTimestamp, onSnapshot } from 'firebase/firestore';
import { Loader2, CheckCircle2, XCircle, Copy, ExternalLink } from 'lucide-react';
import clsx from 'clsx';

export default function TenantDashboard() {
  const [activeTab, setActiveTab] = useState('settings');
  const [clientId, setClientId] = useState<string | null>(null);
  const [clientData, setClientData] = useState<any>(null);
  const [agentConfig, setAgentConfig] = useState<any>(null);
  const [leads, setLeads] = useState<any[]>([]);
  
  const [apiKeyInput, setApiKeyInput] = useState('');
  const [systemInstructionInput, setSystemInstructionInput] = useState('');
  const [primaryColourInput, setPrimaryColourInput] = useState('#4f46e5');
  const [businessNameInput, setBusinessNameInput] = useState('');
  const [isValidating, setIsValidating] = useState(false);
  const [validationResult, setValidationResult] = useState<{ success: boolean; message: string } | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (!auth.currentUser) return;

    const fetchClient = async () => {
      const q = query(collection(db, 'clients'), where('ownerId', '==', auth.currentUser!.uid));
      const querySnapshot = await getDocs(q);
      
      if (!querySnapshot.empty) {
        const clientDoc = querySnapshot.docs[0];
        setClientId(clientDoc.id);
        const data = clientDoc.data();
        setClientData(data);
        setPrimaryColourInput(data.primaryColour || '#4f46e5');
        setBusinessNameInput(data.name || '');
        
        const configRef = doc(db, 'clients', clientDoc.id, 'config', 'agent');
        const configSnap = await getDoc(configRef);
        if (configSnap.exists()) {
          const configData = configSnap.data();
          setAgentConfig(configData);
          setApiKeyInput(configData.geminiApiKey || '');
          setSystemInstructionInput(configData.systemInstruction || '');
        }
      } else {
        // Create a new client for this tenant
        const newClientRef = doc(collection(db, 'clients'));
        const defaultName = `${auth.currentUser!.email}'s Business`;
        await setDoc(newClientRef, {
          name: defaultName,
          ownerId: auth.currentUser!.uid,
          subscriptionActive: true, // Default to true for demo
          primaryColour: '#4f46e5',
          createdAt: serverTimestamp(),
        });
        setClientId(newClientRef.id);
        setClientData({ name: defaultName, subscriptionActive: true, primaryColour: '#4f46e5' });
        setBusinessNameInput(defaultName);
        
        // Create default agent config
        const configRef = doc(db, 'clients', newClientRef.id, 'config', 'agent');
        const defaultInstruction = 'You are a helpful assistant for our business. Keep responses focused on our business and refuse unrelated queries. You can capture leads by asking for their name, email, and phone number. Be aware of South African context like load shedding (schedules are subject to the current load shedding stage), bakkies, and Rands.';
        await setDoc(configRef, {
          geminiApiKey: '',
          systemInstruction: defaultInstruction,
          updatedAt: serverTimestamp(),
        });
        setAgentConfig({ geminiApiKey: '', systemInstruction: defaultInstruction });
        setSystemInstructionInput(defaultInstruction);
      }
    };

    fetchClient();
  }, []);

  useEffect(() => {
    if (!clientId) return;

    const q = query(collection(db, 'leads'), where('clientId', '==', clientId));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const newLeads = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setLeads(newLeads.sort((a: any, b: any) => {
        const timeA = a.createdAt ? (typeof a.createdAt.toMillis === 'function' ? a.createdAt.toMillis() : new Date(a.createdAt).getTime()) : 0;
        const timeB = b.createdAt ? (typeof b.createdAt.toMillis === 'function' ? b.createdAt.toMillis() : new Date(b.createdAt).getTime()) : 0;
        return timeB - timeA;
      }));
    });

    return () => unsubscribe();
  }, [clientId]);

  const handleValidateKey = async () => {
    setIsValidating(true);
    setValidationResult(null);
    try {
      const res = await fetch('/api/validate-key', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ apiKey: apiKeyInput }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setValidationResult({ success: true, message: 'Key validated successfully!' });
      } else {
        setValidationResult({ success: false, message: data.error || 'Validation failed.' });
      }
    } catch (error) {
      setValidationResult({ success: false, message: 'Network error during validation.' });
    } finally {
      setIsValidating(false);
    }
  };

  const handleSaveConfig = async () => {
    if (!clientId) return;
    setIsSaving(true);
    try {
      const clientRef = doc(db, 'clients', clientId);
      await updateDoc(clientRef, {
        name: businessNameInput,
        primaryColour: primaryColourInput,
      });

      const configRef = doc(db, 'clients', clientId, 'config', 'agent');
      await updateDoc(configRef, {
        geminiApiKey: apiKeyInput,
        systemInstruction: systemInstructionInput,
        updatedAt: serverTimestamp(),
      });
      setAgentConfig({ ...agentConfig, geminiApiKey: apiKeyInput, systemInstruction: systemInstructionInput });
      setClientData({ ...clientData, name: businessNameInput, primaryColour: primaryColourInput });
      alert('Configuration saved successfully!');
    } catch (error) {
      console.error('Error saving config:', error);
      alert('Failed to save configuration.');
    } finally {
      setIsSaving(false);
    }
  };

  if (!clientId) {
    return (
      <AuthGuard>
        <div className="flex h-64 items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-zinc-500" />
        </div>
      </AuthGuard>
    );
  }

  return (
    <AuthGuard>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-zinc-900">Tenant Dashboard</h2>
          <p className="text-zinc-500">Manage your AI agent and leads.</p>
        </div>
        <div className="flex items-center gap-2">
          <span className={clsx(
            "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
            clientData?.subscriptionActive ? "bg-emerald-100 text-emerald-800" : "bg-red-100 text-red-800"
          )}>
            Subscription: {clientData?.subscriptionActive ? 'Active' : 'Inactive'}
          </span>
        </div>
      </div>

      <div className="mb-6 border-b border-zinc-200">
        <nav className="-mb-px flex space-x-8">
          {['settings', 'leads', 'widget'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={clsx(
                "whitespace-nowrap border-b-2 px-1 pb-4 text-sm font-medium capitalize",
                activeTab === tab
                  ? "border-zinc-900 text-zinc-900"
                  : "border-transparent text-zinc-500 hover:border-zinc-300 hover:text-zinc-700"
              )}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>

      {activeTab === 'settings' && (
        <div className="space-y-6 max-w-2xl">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-lg font-medium text-zinc-900">Business Details</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-1">Business Name</label>
                <input
                  type="text"
                  value={businessNameInput}
                  onChange={(e) => setBusinessNameInput(e.target.value)}
                  className="block w-full rounded-xl border-zinc-300 shadow-sm focus:border-zinc-500 focus:ring-zinc-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-1">Brand Colour</label>
                <div className="flex items-center gap-3">
                  <input
                    type="color"
                    value={primaryColourInput}
                    onChange={(e) => setPrimaryColourInput(e.target.value)}
                    className="h-10 w-10 rounded border border-zinc-300 p-1"
                  />
                  <span className="text-sm text-zinc-500">{primaryColourInput}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-lg font-medium text-zinc-900">Gemini API Key</h3>
            <p className="mb-4 text-sm text-zinc-500">
              Provide your Google Gemini API key to power your agent. We will validate it before saving.
            </p>
            <div className="flex gap-4">
              <input
                type="password"
                value={apiKeyInput}
                onChange={(e) => setApiKeyInput(e.target.value)}
                placeholder="AIzaSy..."
                className="block w-full rounded-xl border-zinc-300 shadow-sm focus:border-zinc-500 focus:ring-zinc-500 sm:text-sm"
              />
              <button
                onClick={handleValidateKey}
                disabled={isValidating || !apiKeyInput}
                className="flex items-center justify-center rounded-xl bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-200 disabled:opacity-50"
              >
                {isValidating ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Validate'}
              </button>
            </div>
            {validationResult && (
              <div className={clsx("mt-3 flex items-center gap-2 text-sm", validationResult.success ? "text-emerald-600" : "text-red-600")}>
                {validationResult.success ? <CheckCircle2 className="h-4 w-4" /> : <XCircle className="h-4 w-4" />}
                {validationResult.message}
              </div>
            )}
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-lg font-medium text-zinc-900">System Instruction</h3>
            <p className="mb-4 text-sm text-zinc-500">
              Define how your agent should behave and respond to users.
            </p>
            <textarea
              rows={6}
              value={systemInstructionInput}
              onChange={(e) => setSystemInstructionInput(e.target.value)}
              className="block w-full rounded-xl border-zinc-300 shadow-sm focus:border-zinc-500 focus:ring-zinc-500 sm:text-sm"
            />
          </div>

          <div className="flex justify-end">
            <button
              onClick={handleSaveConfig}
              disabled={isSaving || !apiKeyInput || !systemInstructionInput || !businessNameInput}
              className="flex items-center justify-center rounded-xl bg-zinc-900 px-6 py-3 text-sm font-medium text-white shadow-sm hover:bg-zinc-800 disabled:opacity-50"
            >
              {isSaving ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
              Save Configuration
            </button>
          </div>
        </div>
      )}

      {activeTab === 'leads' && (
        <div className="rounded-2xl border border-zinc-200 bg-white shadow-sm overflow-hidden">
          <table className="min-w-full divide-y divide-zinc-200">
            <thead className="bg-zinc-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-zinc-500">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-zinc-500">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-zinc-500">Phone</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-zinc-500">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-zinc-500">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200 bg-white">
              {leads.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-8 text-center text-sm text-zinc-500">No leads captured yet.</td>
                </tr>
              ) : (
                leads.map((lead) => (
                  <tr key={lead.id}>
                    <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-zinc-900">{lead.name}</td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-zinc-500">{lead.email || '-'}</td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-zinc-500">{lead.phone || '-'}</td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm">
                      <span className="inline-flex rounded-full bg-blue-100 px-2 text-xs font-semibold leading-5 text-blue-800">
                        {lead.status}
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-zinc-500">
                      {lead.createdAt ? (typeof lead.createdAt.toDate === 'function' ? lead.createdAt.toDate().toLocaleDateString() : new Date(lead.createdAt).toLocaleDateString()) : '-'}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}

      {activeTab === 'widget' && (
        <div className="space-y-6 max-w-2xl">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-lg font-medium text-zinc-900">Embed Widget</h3>
            <p className="mb-4 text-sm text-zinc-500">
              Copy this iframe code to embed the AI agent on your website.
            </p>
            <div className="relative">
              <pre className="overflow-x-auto rounded-xl bg-zinc-900 p-4 text-sm text-zinc-100">
                {`<script src="${window.location.origin}/api/embed/${clientId}"></script>`}
              </pre>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(`<script src="${window.location.origin}/api/embed/${clientId}"></script>`);
                  alert('Copied to clipboard!');
                }}
                className="absolute right-2 top-2 rounded-lg bg-zinc-800 p-2 text-zinc-300 hover:bg-zinc-700 hover:text-white"
              >
                <Copy className="h-4 w-4" />
              </button>
            </div>
            <div className="mt-6">
              <a
                href={`/widget/${clientId}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-500"
              >
                Preview Widget <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </AuthGuard>
  );
}
