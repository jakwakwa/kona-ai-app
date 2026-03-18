'use client';

import { useState, useEffect } from 'react';
import { db, auth } from '@/lib/firebase';
import { collection, query, onSnapshot, doc, orderBy } from 'firebase/firestore';
import { motion } from 'motion/react';
import { Activity, Clock, AlertTriangle, Loader2, AlertCircle, ArrowLeft, Check } from 'lucide-react';
import { onAuthStateChanged } from 'firebase/auth';
import Link from 'next/link';

enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string;
    email?: string | null;
    emailVerified?: boolean;
    isAnonymous?: boolean;
    tenantId?: string | null;
    providerInfo?: {
      providerId: string;
      displayName: string | null;
      email: string | null;
      photoUrl: string | null;
    }[];
  }
}

function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
      tenantId: auth.currentUser?.tenantId,
      providerInfo: auth.currentUser?.providerData.map(provider => ({
        providerId: provider.providerId,
        displayName: provider.displayName,
        email: provider.email,
        photoUrl: provider.photoURL
      })) || []
    },
    operationType,
    path
  }
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

export default function MonitoringDashboard() {
  const [metrics, setMetrics] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [simulating, setSimulating] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (!currentUser) {
        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!user) return;

    const q = query(collection(db, 'agentMetrics'), orderBy('updatedAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const metricsData = snapshot.docs.map(doc => ({ id: doc.id, ...(doc.data() as any) }));
      setMetrics(metricsData);
      setLoading(false);
    }, (err) => {
      handleFirestoreError(err, OperationType.LIST, 'agentMetrics');
    });

    return () => unsubscribe();
  }, [user]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center bg-slate-50"><Loader2 className="w-8 h-8 animate-spin text-indigo-600" /></div>;
  }

  if (!user || error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
        <div className="bg-red-50 text-red-600 p-6 rounded-2xl flex items-start gap-3 max-w-lg">
          <AlertCircle className="w-6 h-6 shrink-0 mt-0.5" />
          <div>
            <h3 className="font-bold text-lg">Access Denied</h3>
            <p className="mt-1">{error || 'Please ensure you are logged in with the admin email.'}</p>
            <Link href="/dashboard" className="mt-4 inline-block text-sm font-medium underline">Return to Dashboard</Link>
          </div>
        </div>
      </div>
    );
  }

  const handleSimulateMetrics = async () => {
    setSimulating(true);
    try {
      const { setDoc, doc } = await import('firebase/firestore');
      
      const dummyClients = ['client_A', 'client_B', 'client_C'];
      
      for (const clientId of dummyClients) {
        // Randomize metrics
        const activeConversations = Math.floor(Math.random() * 50);
        // Occasionally simulate a slow response time or high error rate
        const isBad = Math.random() > 0.7;
        const averageResponseTime = isBad ? Math.floor(Math.random() * 5000) + 2000 : Math.floor(Math.random() * 1000) + 500;
        const errorRate = isBad ? Math.floor(Math.random() * 15) + 2 : Math.floor(Math.random() * 3);
        
        await setDoc(doc(db, 'agentMetrics', `metric_${clientId}`), {
          clientId,
          activeConversations,
          averageResponseTime,
          errorRate,
          updatedAt: new Date().toISOString()
        });
      }
    } catch (err) {
      handleFirestoreError(err, OperationType.WRITE, 'agentMetrics');
    } finally {
      setSimulating(false);
    }
  };

  const agentsNeedingAttention = metrics.filter(m => m.errorRate > 5 || m.averageResponseTime > 3000);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <header className="bg-white border-b border-slate-200 h-16 flex items-center justify-between px-6 shrink-0">
        <div className="flex items-center gap-4">
          <Link href="/dashboard" className="text-slate-500 hover:text-slate-900 transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <h1 className="font-bold text-xl text-slate-900">Real-Time Monitoring</h1>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={handleSimulateMetrics}
            disabled={simulating}
            className="text-sm bg-slate-900 text-white px-4 py-2 rounded-lg font-medium hover:bg-slate-800 transition-colors flex items-center gap-2 disabled:opacity-70"
          >
            {simulating ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
            {simulating ? 'Simulating...' : 'Simulate Metrics (Dev)'}
          </button>
          <div className="text-sm text-slate-500">{user.email}</div>
        </div>
      </header>

      <main className="flex-1 p-6 overflow-auto">
        <div className="max-w-6xl mx-auto space-y-6">
          
          {agentsNeedingAttention.length > 0 && (
            <div className="bg-red-50 border border-red-200 rounded-2xl p-4 flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-red-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-red-900">Performance Alert</h3>
                <p className="text-red-700 text-sm mt-1">
                  {agentsNeedingAttention.length} agent{agentsNeedingAttention.length === 1 ? ' is' : 's are'} experiencing degraded performance (high error rate or slow response times).
                </p>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                  <Activity className="w-5 h-5" />
                </div>
                <h3 className="font-medium text-slate-700">Total Active Conversations</h3>
              </div>
              <p className="text-3xl font-bold text-slate-900">
                {metrics.reduce((acc, m) => acc + (m.activeConversations || 0), 0)}
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="font-medium text-slate-700">Avg Response Time</h3>
              </div>
              <p className="text-3xl font-bold text-slate-900">
                {metrics.length > 0 
                  ? Math.round(metrics.reduce((acc, m) => acc + (m.averageResponseTime || 0), 0) / metrics.length) 
                  : 0}ms
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-red-50 text-red-600 rounded-lg">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <h3 className="font-medium text-slate-700">Avg Error Rate</h3>
              </div>
              <p className="text-3xl font-bold text-slate-900">
                {metrics.length > 0 
                  ? (metrics.reduce((acc, m) => acc + (m.errorRate || 0), 0) / metrics.length).toFixed(1) 
                  : 0}%
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-200">
              <h2 className="font-bold text-slate-900">Tenant Agent Metrics</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50 text-slate-600">
                  <tr>
                    <th className="px-6 py-3 font-medium">Client ID</th>
                    <th className="px-6 py-3 font-medium">Active Convs</th>
                    <th className="px-6 py-3 font-medium">Avg Response Time</th>
                    <th className="px-6 py-3 font-medium">Error Rate</th>
                    <th className="px-6 py-3 font-medium">Status</th>
                    <th className="px-6 py-3 font-medium">Last Updated</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {metrics.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="px-6 py-8 text-center text-slate-500">
                        No metric data available.
                      </td>
                    </tr>
                  ) : (
                    metrics.map((metric) => {
                      const isHighError = metric.errorRate > 5;
                      const isSlow = metric.averageResponseTime > 3000;
                      const hasAlert = isHighError || isSlow;

                      return (
                        <tr key={metric.id} className="hover:bg-slate-50 transition-colors">
                          <td className="px-6 py-4 font-medium text-slate-900">{metric.clientId}</td>
                          <td className="px-6 py-4">{metric.activeConversations || 0}</td>
                          <td className="px-6 py-4">
                            <span className={isSlow ? 'text-amber-600 font-medium' : ''}>
                              {metric.averageResponseTime || 0}ms
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <span className={isHighError ? 'text-red-600 font-medium' : ''}>
                              {metric.errorRate || 0}%
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            {hasAlert ? (
                              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-red-100 text-red-700">
                                <AlertCircle className="w-3.5 h-3.5" />
                                Needs Attention
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700">
                                <Check className="w-3.5 h-3.5" />
                                Healthy
                              </span>
                            )}
                          </td>
                          <td className="px-6 py-4 text-slate-500">
                            {new Date(metric.updatedAt).toLocaleTimeString()}
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
