"use client";

import {
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithPopup,
	signOut,
} from "firebase/auth";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { auth, db } from "@/lib/firebase";

export default function AuthGuard({
	children,
	requireAdmin = false,
}: {
	children: React.ReactNode;
	requireAdmin?: boolean;
}) {
	const router = useRouter();
	const [user, setUser] = useState<any>(null);
	const [loading, setLoading] = useState(true);
	const [isAdmin, setIsAdmin] = useState(false);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
			if (currentUser) {
				// Check if user exists in Firestore
				const userRef = doc(db, "users", currentUser.uid);
				const userSnap = await getDoc(userRef);

				let role = "tenant";
				if (!userSnap.exists()) {
					// Create user if they don't exist
					// If email is the default admin email, set role to admin
					if (
						currentUser.email === process.env.NEXT_PUBLIC_FIREBASE_ADMIN_OWNER_EMAIL! &&
						currentUser.emailVerified
					) {
						role = "admin";
					}
					await setDoc(userRef, {
						email: currentUser.email,
						role,
						createdAt: serverTimestamp(),
					});
				} else {
					role = userSnap.data().role;
				}

				setUser(currentUser);
				setIsAdmin(role === "admin");
			} else {
				setUser(null);
				setIsAdmin(false);
			}
			setLoading(false);
		});

		return () => unsubscribe();
	}, []);

	const handleLogin = async () => {
		const provider = new GoogleAuthProvider();
		try {
			await signInWithPopup(auth, provider);
		} catch (error) {
			console.error("Login error:", error);
		}
	};

	if (loading) {
		return (
			<div className="flex h-screen items-center justify-center bg-zinc-50">
				<Loader2 className="h-8 w-8 animate-spin text-zinc-500" />
			</div>
		);
	}

	if (!user) {
		return (
			<div className="flex h-screen flex-col items-center justify-center bg-zinc-50">
				<h1 className="mb-4 text-2xl font-semibold text-zinc-900">
					Kona AI Platform
				</h1>
				<p className="mb-8 text-zinc-500">
					Please sign in to access the dashboard.
				</p>
				<button
					onClick={handleLogin}
					className="rounded-xl bg-zinc-900 px-6 py-3 text-sm font-medium text-white shadow-sm hover:bg-zinc-800"
				>
					Sign in with Google
				</button>
			</div>
		);
	}

	if (requireAdmin && !isAdmin) {
		return (
			<div className="flex h-screen flex-col items-center justify-center bg-zinc-50">
				<h1 className="mb-4 text-2xl font-semibold text-zinc-900">
					Access Denied
				</h1>
				<p className="mb-8 text-zinc-500">
					You do not have permission to view this page.
				</p>
				<button
					onClick={async () => {
						try {
							await signOut(auth);
							router.push("/");
						} catch (error) {
							console.error("Sign out error:", error);
						}
					}}
					className="rounded-xl border border-zinc-200 bg-white px-6 py-3 text-sm font-medium text-zinc-900 shadow-sm hover:bg-zinc-50"
				>
					Sign out
				</button>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-zinc-50">
			<header className="flex items-center justify-between border-b border-zinc-200 bg-white px-6 py-4">
				<div className="flex items-center gap-4">
					<h1 className="text-lg font-semibold text-zinc-900">Kona AI</h1>
					{isAdmin && (
						<span className="rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-medium text-indigo-800">
							Admin
						</span>
					)}
				</div>
				<div className="flex items-center gap-4">
					<span className="text-sm text-zinc-500">{user.email}</span>
					<button
						onClick={async () => {
							try {
								await signOut(auth);
								router.push("/");
							} catch (error) {
								console.error("Sign out error:", error);
							}
						}}
						className="text-sm font-medium text-zinc-600 hover:text-zinc-900"
					>
						Sign out
					</button>
				</div>
			</header>
			<main className="mx-auto max-w-7xl p-6">
				<ErrorBoundary>{children}</ErrorBoundary>
			</main>
		</div>
	);
}
