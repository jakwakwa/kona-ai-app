import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
import firebaseConfig from "../firebase-applet-config.json";

const hasRealtimeUrl =
	typeof firebaseConfig.databaseURL === "string" &&
	/firebaseio\.com|firebasedatabase\.app/.test(firebaseConfig.databaseURL);

export const firebaseApp = !getApps().length
	? initializeApp(firebaseConfig)
	: getApp();

export const db = getFirestore(firebaseApp, firebaseConfig.firestoreDatabaseId);
export const auth = getAuth(firebaseApp);

/** Realtime Database. Only set when `databaseURL` is configured (e.g. FIREBASE_DATABASE_URL). */
export const realtimeDb = hasRealtimeUrl ? getDatabase(firebaseApp) : null;
