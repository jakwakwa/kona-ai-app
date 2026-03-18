"use client";

import { useEffect } from "react";

/**
 * Handles uncaught Firestore "client is offline" Promise rejections.
 * Firestore's internal sync engine can reject Promises when the connection drops;
 * those rejections are not passed to our onSnapshot error callback.
 * This handler prevents "Uncaught (in promise)" console noise for that specific case.
 */
export function FirestoreOfflineHandler() {
	useEffect(() => {
		const handler = (event: PromiseRejectionEvent) => {
			const msg =
				event.reason?.message ?? String(event.reason ?? "");
			if (
				msg.toLowerCase().includes("client is offline") ||
				msg.toLowerCase().includes("failed to get document because the client is offline")
			) {
				event.preventDefault();
				event.stopPropagation();
				console.warn(
					"[Firestore] Connection lost. Data will sync when back online.",
					event.reason,
				);
			}
		};
		window.addEventListener("unhandledrejection", handler);
		return () => window.removeEventListener("unhandledrejection", handler);
	}, []);
	return null;
}
