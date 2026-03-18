"use client";

import {
	GoogleAuthProvider,
	signInWithPopup,
	signOut,
} from "firebase/auth";
import { ShieldCheck } from "lucide-react";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebase";

const OWNER_EMAIL = process.env.NEXT_PUBLIC_FIREBASE_ADMIN_OWNER_EMAIL;

interface CEOAccessGateProps {
	user: { email: string | null } | null;
	children: React.ReactNode;
}

export function CEOAccessGate({ user, children }: CEOAccessGateProps) {
	const router = useRouter();
	const isOwner =
		OWNER_EMAIL && user?.email?.toLowerCase() === OWNER_EMAIL.toLowerCase();

	if (isOwner) {
		return <>{children}</>;
	}

	const handleSignIn = async () => {
		const provider = new GoogleAuthProvider();
		try {
			await signInWithPopup(auth, provider);
		} catch (error) {
			console.error("Login error:", error);
		}
	};

	const handleSignOut = async () => {
		try {
			await signOut(auth);
			router.push("/");
		} catch (error) {
			console.error("Sign out error:", error);
		}
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-slate-900 text-white p-8 text-center">
			<div>
				<ShieldCheck className="w-16 h-16 text-red-500 mx-auto mb-6" />
				<h1 className="text-3xl font-bold mb-4">Access Denied</h1>
				<p className="text-slate-400 mb-8">
					{user
						? "This portal is restricted to the platform CEO."
						: "Please sign in to access the CEO dashboard."}
				</p>
				<div className="flex flex-col sm:flex-row gap-4 justify-center">
					{!user ? (
						<button
							onClick={handleSignIn}
							className="bg-indigo-600 px-6 py-2 rounded-xl hover:bg-indigo-500 transition-colors font-medium"
						>
							Sign in with Google
						</button>
					) : (
						<>
							<button
								onClick={handleSignOut}
								className="bg-slate-800 px-6 py-2 rounded-xl hover:bg-slate-700 transition-colors"
							>
								Sign Out
							</button>
							<button
								onClick={async () => {
									try {
										await signOut(auth);
										await handleSignIn();
									} catch (error) {
										console.error("Sign out error:", error);
									}
								}}
								className="border border-slate-600 px-6 py-2 rounded-xl hover:bg-slate-800 transition-colors"
							>
								Sign in with different account
							</button>
						</>
					)}
				</div>
			</div>
		</div>
	);
}
