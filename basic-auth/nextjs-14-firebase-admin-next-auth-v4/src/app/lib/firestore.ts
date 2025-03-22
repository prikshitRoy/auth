import * as admin from "firebase-admin";
import { getStorage } from "firebase-admin/storage";
import { getFirestore } from "firebase-admin/firestore";
import { cert, getApps, getApp, initializeApp } from "firebase-admin/app";
import { initFirestore } from "@auth/firebase-adapter";

const firebaseAdminConfig = {
  credential: cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY,
  }),
  databaseURL: process.env.FIREBASE_DATABASE_URL,
};

// Firebase Admin SDK Set up
const app = !getApps().length ? initializeApp(firebaseAdminConfig) : getApp();
const db = getFirestore(app);
export { app, db };

// Next-Auth Firebase Auth Set up
// initFirestore: It make sure that there is no duplicate app initialization issues in serverless environments
export const firestore = initFirestore(firebaseAdminConfig);
