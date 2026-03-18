import * as admin from "firebase-admin";
import { getFirestore } from "firebase-admin/firestore";
import firebaseConfig from "../firebase-applet-config.json";

export const adminApp = !admin.apps.length
	? admin.initializeApp({
			projectId: firebaseConfig.projectId,
		})
	: admin.app();

export const adminDb = getFirestore(
	adminApp,
	firebaseConfig.firestoreDatabaseId,
);
