import { cert, getApps, getApp, initializeApp } from "firebase-admin/app";
import { initFirestore } from "@auth/firebase-adapter";
import * as admin from "firebase-admin";
import { getFirestore } from "firebase-admin/firestore";
import { getStorage } from "firebase-admin/storage";

const firebaseAdminConfig = {};

if (admin.apps.length === 0) {
  admin.initializeApp({
    credential: cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY,
    }),
    databaseURL: process.env.FIREBASE_DATABASE_URL,
  });
}

export const firestore = initFirestore();
