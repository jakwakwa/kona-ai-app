#!/usr/bin/env node
/**
 * Verifies Firestore campaigns read access for an authenticated user.
 * Run: bun run scripts/verify-firestore-campaigns-access.mjs
 */
import { readFileSync } from "fs";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, query, orderBy } from "firebase/firestore";
import { signInWithCustomToken, getAuth } from "firebase/auth";
import admin from "firebase-admin";

const paths = [
	process.env.FIREBASE_SERVICE_ACCOUNT_KEY,
	"/Users/jacobkotzee/Projects/GCP/kona-83f57-firebase-adminsdk-fbsvc-ebc3e96eb4.json",
].filter(Boolean);

let serviceAccount;
for (const p of paths) {
	try {
		serviceAccount = JSON.parse(readFileSync(p, "utf8"));
		break;
	} catch {}
}
if (!serviceAccount) {
	console.error("Could not load service account");
	process.exit(1);
}

if (!admin.apps.length) {
	admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });
}

const customToken = await admin.auth().createCustomToken("verify-uid", {
	email: "jakwakwa@gmail.com",
	email_verified: true,
});

const app = initializeApp({
	apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
	authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
});

const db = getFirestore(app, "(default)");
const auth = getAuth(app);

await signInWithCustomToken(auth, customToken);

const q = query(collection(db, "campaigns"), orderBy("createdAt", "desc"));
const snapshot = await getDocs(q);

console.log("✓ Firestore campaigns read: SUCCESS");
console.log(`  Documents: ${snapshot.docs.length}`);
process.exit(0);
