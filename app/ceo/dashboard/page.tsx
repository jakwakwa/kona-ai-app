"use client";

import { onAuthStateChanged, signOut } from "firebase/auth";
import {
	collection,
	onSnapshot,
} from "firebase/firestore";
import {
	BarChart3,
	Briefcase,
	ChevronRight,
	Loader2,
	Mail,
	MessageSquare,
	Search,
	TrendingUp,
	Users,
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { auth, db } from "@/lib/firebase";
import { CEOAccessGate } from "@/components/CEOAccessGate";

const OWNER_EMAIL = process.env.NEXT_PUBLIC_FIREBASE_ADMIN_OWNER_EMAIL;

export default function CEODashboard() {
	const router = useRouter();
	const [user, setUser] = useState<any>(null);
	const [loading, setLoading] = useState(true);
	const [clients, setClients] = useState<any[]>([]);
	const [leads, setLeads] = useState<any[]>([]);
	const [inboundLeads, setInboundLeads] = useState<any[]>([]);
	const [searchTerm, setSearchTerm] = useState("");

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
			if (
				!currentUser ||
				currentUser.email?.toLowerCase() !== OWNER_EMAIL?.toLowerCase()
			) {
				setLoading(false);
			}
		});
		return () => unsubscribe();
	}, []);

	useEffect(() => {
		if (!user || user.email?.toLowerCase() !== OWNER_EMAIL?.toLowerCase()) {
			return;
		}

		const clientsUnsubscribe = onSnapshot(
			collection(db, "clients"),
			(snapshot) => {
				setClients(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
				setLoading(false);
			},
		);

		const leadsUnsubscribe = onSnapshot(collection(db, "leads"), (snapshot) => {
			setLeads(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
		});

		const inboundLeadsUnsubscribe = onSnapshot(
			collection(db, "inboundLeads"),
			(snapshot) => {
				setInboundLeads(
					snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })),
				);
			},
		);

		return () => {
			clientsUnsubscribe();
			leadsUnsubscribe();
			inboundLeadsUnsubscribe();
		};
	}, [user]);

	if (loading) {
		return (
			<div className="min-h-screen flex items-center justify-center bg-slate-900">
				<Loader2 className="w-8 h-8 animate-spin text-indigo-500" />
			</div>
		);
	}

	if (!user || user.email?.toLowerCase() !== OWNER_EMAIL?.toLowerCase()) {
		return <CEOAccessGate user={user}>{null}</CEOAccessGate>;
	}

	const filteredClients = clients.filter(
		(c) =>
			c.businessName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
			c.email?.toLowerCase().includes(searchTerm.toLowerCase()),
	);

	const stats = [
		{
			label: "Total Clients",
			value: clients.length,
			icon: Users,
			color: "text-blue-400",
		},
		{
			label: "Active Subs",
			value: clients.filter((c) => c.subscriptionActive).length,
			icon: TrendingUp,
			color: "text-emerald-400",
		},
		{
			label: "Total Leads (Out)",
			value: leads.length,
			icon: Mail,
			color: "text-indigo-400",
		},
		{
			label: "Total Leads (In)",
			value: inboundLeads.length,
			icon: MessageSquare,
			color: "text-amber-400",
		},
	];

	return (
		<div className="min-h-screen bg-slate-950 text-slate-200 font-sans">
			{/* Header */}
			<header className="bg-slate-900/50 backdrop-blur-md border-b border-slate-800 h-20 flex items-center justify-between px-8 sticky top-0 z-20">
				<div className="flex items-center gap-4">
					<div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
						<BarChart3 className="w-6 h-6 text-white" />
					</div>
					<div>
						<h1 className="font-bold text-xl tracking-tight">Kona AI CEO</h1>
						<p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">
							Lead Triage & Outreach
						</p>
					</div>
				</div>
				<div className="flex items-center gap-6">
					<div className="relative hidden sm:block">
						<Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
						<input
							type="text"
							placeholder="Search clients..."
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
							className="bg-slate-800 border-none rounded-full pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-indigo-500 w-64 transition-all"
						/>
					</div>
					<button
						onClick={async () => {
							try {
								await signOut(auth);
								router.push("/");
							} catch (error) {
								console.error("Sign out error:", error);
							}
						}}
						className="text-sm font-bold text-slate-400 hover:text-white transition-colors"
					>
						Sign Out
					</button>
				</div>
			</header>

			<main className="max-w-7xl mx-auto px-8 py-12">
				{/* Stats Grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
					{stats.map((stat, i) => (
						<motion.div
							key={i}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: i * 0.1 }}
							className="bg-slate-900 p-6 rounded-3xl border border-slate-800 shadow-sm"
						>
							<div className="flex items-center justify-between mb-4">
								<div className={`p-2 rounded-lg bg-slate-800 ${stat.color}`}>
									<stat.icon className="w-5 h-5" />
								</div>
							</div>
							<p className="text-slate-500 text-sm font-medium">{stat.label}</p>
							<h3 className="text-3xl font-bold mt-1">{stat.value}</h3>
						</motion.div>
					))}
				</div>

				{/* Clients Table */}
				<div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden">
					<div className="p-6 border-b border-slate-800 flex items-center justify-between">
						<h2 className="text-xl font-bold">Tenant Ecosystem</h2>
						<span className="text-xs font-bold text-slate-500 uppercase tracking-widest">
							{filteredClients.length} Total
						</span>
					</div>
					<div className="overflow-x-auto">
						<table className="w-full text-left">
							<thead>
								<tr className="bg-slate-800/50 text-slate-400 text-[10px] font-bold uppercase tracking-widest">
									<th className="px-6 py-4">Business</th>
									<th className="px-6 py-4">Contact</th>
									<th className="px-6 py-4">Status</th>
									<th className="px-6 py-4">Inbound Leads</th>
									<th className="px-6 py-4">Outbound Leads</th>
									<th className="px-6 py-4">Joined</th>
									<th className="px-6 py-4"></th>
								</tr>
							</thead>
							<tbody className="divide-y divide-slate-800">
								{filteredClients.map((client) => {
									const clientInboundLeads = inboundLeads.filter(
										(l) => l.clientId === client.uid,
									);
									const clientOutboundLeads = leads.filter(
										(l) => l.clientId === client.uid,
									); // Assuming leads have clientId

									return (
										<tr
											key={client.id}
											className="hover:bg-slate-800/30 transition-colors group"
										>
											<td className="px-6 py-4">
												<div className="flex items-center gap-3">
													<div className="w-8 h-8 bg-indigo-500/10 rounded-lg flex items-center justify-center">
														<Briefcase className="w-4 h-4 text-indigo-400" />
													</div>
													<span className="font-bold text-sm">
														{client.businessName}
													</span>
												</div>
											</td>
											<td className="px-6 py-4 text-sm text-slate-400">
												{client.email}
											</td>
											<td className="px-6 py-4">
												<span
													className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
														client.subscriptionActive
															? "bg-emerald-500/10 text-emerald-500"
															: "bg-red-500/10 text-red-500"
													}`}
												>
													{client.subscriptionActive ? "Active" : "Inactive"}
												</span>
											</td>
											<td className="px-6 py-4">
												<div className="flex items-center gap-2">
													<span className="text-sm font-bold">
														{clientInboundLeads.length}
													</span>
													<div className="w-16 h-1 bg-slate-800 rounded-full overflow-hidden">
														<div
															className="h-full bg-amber-500"
															style={{
																width: `${Math.min(clientInboundLeads.length * 5, 100)}%`,
															}}
														/>
													</div>
												</div>
											</td>
											<td className="px-6 py-4">
												<div className="flex items-center gap-2">
													<span className="text-sm font-bold">
														{clientOutboundLeads.length}
													</span>
													<div className="w-16 h-1 bg-slate-800 rounded-full overflow-hidden">
														<div
															className="h-full bg-indigo-500"
															style={{
																width: `${Math.min(clientOutboundLeads.length * 5, 100)}%`,
															}}
														/>
													</div>
												</div>
											</td>
											<td className="px-6 py-4 text-sm text-slate-500">
												{new Date(client.createdAt).toLocaleDateString()}
											</td>
											<td className="px-6 py-4 text-right">
												<button className="p-2 text-slate-500 hover:text-white transition-colors">
													<ChevronRight className="w-5 h-5" />
												</button>
											</td>
										</tr>
									);
								})}
							</tbody>
						</table>
					</div>
				</div>
			</main>
		</div>
	);
}
