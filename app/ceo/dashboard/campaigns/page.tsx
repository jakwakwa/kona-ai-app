'use client';

import { useState, useEffect } from 'react';
import { db } from '@/lib/firebase';
import { collection, query, onSnapshot, orderBy, addDoc } from 'firebase/firestore';
import { motion } from 'motion/react';
import { Mail, Plus, BarChart2, MousePointerClick, CheckCircle, Loader2 } from 'lucide-react';
import { auth } from '@/lib/firebase';

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

export default function CampaignsDashboard() {
  const [campaigns, setCampaigns] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showNewCampaign, setShowNewCampaign] = useState(false);
  const [newCampaign, setNewCampaign] = useState({
    name: '',
    subjectA: '',
    subjectB: '',
    bodyA: '',
    bodyB: ''
  });

  useEffect(() => {
    const q = query(collection(db, 'campaigns'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setCampaigns(snapshot.docs.map(doc => ({ id: doc.id, ...(doc.data() as any) })));
      setLoading(false);
    }, (err) => {
      handleFirestoreError(err, OperationType.LIST, 'campaigns');
    });
    return () => unsubscribe();
  }, []);

  const handleCreateCampaign = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'campaigns'), {
        ...newCampaign,
        sentCount: 0,
        openCountA: 0,
        openCountB: 0,
        clickCountA: 0,
        clickCountB: 0,
        conversionCountA: 0,
        conversionCountB: 0,
        createdAt: new Date().toISOString()
      });
      setShowNewCampaign(false);
      setNewCampaign({ name: '', subjectA: '', subjectB: '', bodyA: '', bodyB: '' });
    } catch (err) {
      handleFirestoreError(err, OperationType.CREATE, 'campaigns');
    }
  };

  const simulateSend = async (campaignId: string) => {
    try {
      const { doc, updateDoc, increment } = await import('firebase/firestore');
      
      // Simulate sending to 100 leads
      const sent = 100;
      const opensA = Math.floor(Math.random() * 30) + 10;
      const opensB = Math.floor(Math.random() * 30) + 10;
      const clicksA = Math.floor(Math.random() * opensA);
      const clicksB = Math.floor(Math.random() * opensB);
      const conversionsA = Math.floor(Math.random() * clicksA);
      const conversionsB = Math.floor(Math.random() * clicksB);

      await updateDoc(doc(db, 'campaigns', campaignId), {
        sentCount: increment(sent),
        openCountA: increment(opensA),
        openCountB: increment(opensB),
        clickCountA: increment(clicksA),
        clickCountB: increment(clicksB),
        conversionCountA: increment(conversionsA),
        conversionCountB: increment(conversionsB)
      });
    } catch (err) {
      handleFirestoreError(err, OperationType.UPDATE, `campaigns/${campaignId}`);
    }
  };

  if (loading) {
    return <div className="flex-1 flex items-center justify-center"><Loader2 className="w-8 h-8 animate-spin text-indigo-600" /></div>;
  }

  return (
    <div className="flex-1 flex flex-col bg-slate-50 overflow-y-auto p-6">
      <div className="max-w-6xl mx-auto w-full space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Outbound Campaigns</h1>
            <p className="text-slate-500 mt-1">Manage A/B testing and view email performance analytics.</p>
          </div>
          <button 
            onClick={() => setShowNewCampaign(true)}
            className="bg-indigo-600 text-white px-4 py-2 rounded-xl font-medium hover:bg-indigo-700 transition-colors flex items-center gap-2"
          >
            <Plus className="w-5 h-5" />
            New Campaign
          </button>
        </div>

        {showNewCampaign && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200"
          >
            <h2 className="text-lg font-bold text-slate-900 mb-4">Create A/B Test Campaign</h2>
            <form onSubmit={handleCreateCampaign} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Campaign Name</label>
                <input 
                  required
                  type="text" 
                  value={newCampaign.name}
                  onChange={e => setNewCampaign({...newCampaign, name: e.target.value})}
                  className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500"
                  placeholder="e.g., Q3 Plumbing Outreach"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <h3 className="font-bold text-slate-700">Variant A</h3>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Subject Line</label>
                    <input 
                      required
                      type="text" 
                      value={newCampaign.subjectA}
                      onChange={e => setNewCampaign({...newCampaign, subjectA: e.target.value})}
                      className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Email Body</label>
                    <textarea 
                      required
                      rows={4}
                      value={newCampaign.bodyA}
                      onChange={e => setNewCampaign({...newCampaign, bodyA: e.target.value})}
                      className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                </div>

                <div className="space-y-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <h3 className="font-bold text-slate-700">Variant B</h3>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Subject Line</label>
                    <input 
                      required
                      type="text" 
                      value={newCampaign.subjectB}
                      onChange={e => setNewCampaign({...newCampaign, subjectB: e.target.value})}
                      className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Email Body</label>
                    <textarea 
                      required
                      rows={4}
                      value={newCampaign.bodyB}
                      onChange={e => setNewCampaign({...newCampaign, bodyB: e.target.value})}
                      className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <button 
                  type="button"
                  onClick={() => setShowNewCampaign(false)}
                  className="px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="px-4 py-2 text-sm font-medium bg-indigo-600 text-white hover:bg-indigo-700 rounded-lg transition-colors"
                >
                  Create Campaign
                </button>
              </div>
            </form>
          </motion.div>
        )}

        <div className="space-y-6">
          {campaigns.map(campaign => {
            const sentA = Math.floor(campaign.sentCount / 2);
            const sentB = Math.ceil(campaign.sentCount / 2);
            
            const openRateA = sentA > 0 ? ((campaign.openCountA / sentA) * 100).toFixed(1) : '0.0';
            const openRateB = sentB > 0 ? ((campaign.openCountB / sentB) * 100).toFixed(1) : '0.0';
            
            const ctrA = campaign.openCountA > 0 ? ((campaign.clickCountA / campaign.openCountA) * 100).toFixed(1) : '0.0';
            const ctrB = campaign.openCountB > 0 ? ((campaign.clickCountB / campaign.openCountB) * 100).toFixed(1) : '0.0';
            
            const convRateA = campaign.clickCountA > 0 ? ((campaign.conversionCountA / campaign.clickCountA) * 100).toFixed(1) : '0.0';
            const convRateB = campaign.clickCountB > 0 ? ((campaign.conversionCountB / campaign.clickCountB) * 100).toFixed(1) : '0.0';

            return (
              <div key={campaign.id} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="p-6 border-b border-slate-200 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{campaign.name}</h3>
                    <p className="text-sm text-slate-500 mt-1">Sent to {campaign.sentCount} leads • Created {new Date(campaign.createdAt).toLocaleDateString()}</p>
                  </div>
                  <button 
                    onClick={() => simulateSend(campaign.id)}
                    className="text-sm bg-slate-100 text-slate-700 px-4 py-2 rounded-lg font-medium hover:bg-slate-200 transition-colors"
                  >
                    Simulate Send (Dev)
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200">
                  {/* Variant A */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-indigo-100 text-indigo-700 text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">Variant A</span>
                      {parseFloat(openRateA) > parseFloat(openRateB) && <span className="text-xs font-bold text-emerald-600 flex items-center gap-1"><CheckCircle className="w-3 h-3" /> Winner</span>}
                    </div>
                    <p className="text-sm font-medium text-slate-900 mb-6">&quot;{campaign.subjectA}&quot;</p>
                    
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-slate-500 flex items-center gap-1.5"><Mail className="w-4 h-4" /> Open Rate</span>
                          <span className="font-bold text-slate-900">{openRateA}%</span>
                        </div>
                        <div className="w-full bg-slate-100 rounded-full h-2">
                          <div className="bg-indigo-500 h-2 rounded-full" style={{ width: `${Math.min(100, parseFloat(openRateA))}%` }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-slate-500 flex items-center gap-1.5"><MousePointerClick className="w-4 h-4" /> Click Rate</span>
                          <span className="font-bold text-slate-900">{ctrA}%</span>
                        </div>
                        <div className="w-full bg-slate-100 rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${Math.min(100, parseFloat(ctrA))}%` }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-slate-500 flex items-center gap-1.5"><BarChart2 className="w-4 h-4" /> Conversion</span>
                          <span className="font-bold text-slate-900">{convRateA}%</span>
                        </div>
                        <div className="w-full bg-slate-100 rounded-full h-2">
                          <div className="bg-emerald-500 h-2 rounded-full" style={{ width: `${Math.min(100, parseFloat(convRateA))}%` }}></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Variant B */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-slate-100 text-slate-700 text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">Variant B</span>
                      {parseFloat(openRateB) > parseFloat(openRateA) && <span className="text-xs font-bold text-emerald-600 flex items-center gap-1"><CheckCircle className="w-3 h-3" /> Winner</span>}
                    </div>
                    <p className="text-sm font-medium text-slate-900 mb-6">&quot;{campaign.subjectB}&quot;</p>
                    
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-slate-500 flex items-center gap-1.5"><Mail className="w-4 h-4" /> Open Rate</span>
                          <span className="font-bold text-slate-900">{openRateB}%</span>
                        </div>
                        <div className="w-full bg-slate-100 rounded-full h-2">
                          <div className="bg-indigo-500 h-2 rounded-full" style={{ width: `${Math.min(100, parseFloat(openRateB))}%` }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-slate-500 flex items-center gap-1.5"><MousePointerClick className="w-4 h-4" /> Click Rate</span>
                          <span className="font-bold text-slate-900">{ctrB}%</span>
                        </div>
                        <div className="w-full bg-slate-100 rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${Math.min(100, parseFloat(ctrB))}%` }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-slate-500 flex items-center gap-1.5"><BarChart2 className="w-4 h-4" /> Conversion</span>
                          <span className="font-bold text-slate-900">{convRateB}%</span>
                        </div>
                        <div className="w-full bg-slate-100 rounded-full h-2">
                          <div className="bg-emerald-500 h-2 rounded-full" style={{ width: `${Math.min(100, parseFloat(convRateB))}%` }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          
          {campaigns.length === 0 && !showNewCampaign && (
            <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 border-dashed">
              <Mail className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h3 className="text-lg font-medium text-slate-900">No campaigns yet</h3>
              <p className="text-slate-500 mt-1">Create your first A/B test campaign to start optimizing outreach.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
