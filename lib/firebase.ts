import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import {
	getFirestore,
	initializeFirestore,
	persistentLocalCache,
} from "firebase/firestore";

/** Build Firebase config from env vars at runtime (firebase-applet-config.json placeholders are not substituted). */
const firebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
	authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
	storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
	measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
	databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
};

/** Firestore database ID. Default is "(default)". Do NOT use project ID (e.g. kona-83f57). */
const firestoreDatabaseId =
	process.env.NEXT_PUBLIC_FIRESTORE_DATABASE_ID ?? "(default)";

const hasRealtimeUrl =
	typeof firebaseConfig.databaseURL === "string" &&
	/firebaseio\.com|firebasedatabase\.app/.test(firebaseConfig.databaseURL);

export const firebaseApp = !getApps().length
	? initializeApp(firebaseConfig)
	: getApp();

/** Use persistent cache in browser for offline support; memory cache in Node (SSR). */
const isBrowser = typeof window !== "undefined";
export const db = isBrowser
	? initializeFirestore(
			firebaseApp,
			{ localCache: persistentLocalCache() },
			firestoreDatabaseId ?? "(default)",
		)
	: getFirestore(firebaseApp, firestoreDatabaseId ?? "(default)");

export const auth = getAuth(firebaseApp);

/** Realtime Database. Only set when `databaseURL` is configured (e.g. FIREBASE_DATABASE_URL). */
export const realtimeDb = hasRealtimeUrl ? getDatabase(firebaseApp) : null;
