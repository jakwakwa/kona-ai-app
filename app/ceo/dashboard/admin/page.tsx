'use client';

import { useState, useEffect } from 'react';
import AuthGuard from '@/components/AuthGuard';
import { db } from '@/lib/firebase';
import { collection, query, getDocs, onSnapshot, orderBy } from 'firebase/firestore';
import { Loader2, Users, MessageSquare, TrendingUp, Search } from 'lucide-react';
import clsx from 'clsx';

export default function AdminDashboard() {
  const [leads, setLeads] = useState<any[]>([]);
  const [clients, setClients] = useState<Record<string, any>>({});
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchClients = async () => {
      const q = query(collection(db, 'clients'));
      const snapshot = await getDocs(q);
      const clientMap: Record<string, any> = {};
      snapshot.forEach(doc => {
        clientMap[doc.id] = { id: doc.id, ...doc.data() };
      });
      setClients(clientMap);
    };

    fetchClients();

    const q = query(collection(db, 'leads'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const newLeads = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setLeads(newLeads);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const filteredLeads = leads.filter(lead => 
    lead.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lead.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    clients[lead.clientId]?.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <AuthGuard requireAdmin>
        <div className="flex h-64 items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-zinc-500" />
        </div>
      </AuthGuard>
    );
  }

  return (
    <AuthGuard requireAdmin>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-zinc-900">CEO View (Lead Triage)</h2>
        <p className="text-zinc-500">Monitor lead volume across all clients.</p>
      </div>

      <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="rounded-xl bg-indigo-100 p-3 text-indigo-600">
              <Users className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-zinc-500">Total Clients</p>
              <p className="text-2xl font-bold text-zinc-900">{Object.keys(clients).length}</p>
            </div>
          </div>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="rounded-xl bg-emerald-100 p-3 text-emerald-600">
              <TrendingUp className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-zinc-500">Total Leads</p>
              <p className="text-2xl font-bold text-zinc-900">{leads.length}</p>
            </div>
          </div>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="rounded-xl bg-amber-100 p-3 text-amber-600">
              <MessageSquare className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-zinc-500">New Leads Today</p>
              <p className="text-2xl font-bold text-zinc-900">
                {leads.filter(l => {
                  if (!l.createdAt) return false;
                  const today = new Date();
                  const leadDate = typeof l.createdAt.toDate === 'function' ? l.createdAt.toDate() : new Date(l.createdAt);
                  return leadDate.toDateString() === today.toDateString();
                }).length}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-lg font-medium text-zinc-900">All Leads</h3>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
          <input
            type="text"
            placeholder="Search leads or clients..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="block w-full rounded-xl border-zinc-300 pl-10 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
      </div>

      <div className="rounded-2xl border border-zinc-200 bg-white shadow-sm overflow-hidden">
        <table className="min-w-full divide-y divide-zinc-200">
          <thead className="bg-zinc-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-zinc-500">Client</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-zinc-500">Lead Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-zinc-500">Contact</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-zinc-500">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-zinc-500">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-200 bg-white">
            {filteredLeads?.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-6 py-8 text-center text-sm text-zinc-500">No leads found.</td>
              </tr>
            ) : (
              filteredLeads?.map((lead) => (
                <tr key={lead.id} className="hover:bg-zinc-50">
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-zinc-900">
                    {clients[lead.clientId]?.name || 'Unknown Client'}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-zinc-900">{lead.name}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-zinc-500">
                    <div>{lead.email || '-'}</div>
                    <div className="text-xs text-zinc-400">{lead.phone || '-'}</div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm">
                    <span className={clsx(
                      "inline-flex rounded-full px-2 text-xs font-semibold leading-5",
                      lead.status === 'NEW_LEAD' ? "bg-blue-100 text-blue-800" :
                      lead.status === 'DRAFT_PENDING' ? "bg-amber-100 text-amber-800" :
                      "bg-emerald-100 text-emerald-800"
                    )}>
                      {lead.status}
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-zinc-500">
                    {lead.createdAt ? (typeof lead.createdAt.toDate === 'function' ? lead.createdAt.toDate().toLocaleString() : new Date(lead.createdAt).toLocaleString()) : '-'}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </AuthGuard>
  );
}
