import { initializeApp } from "firebase/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

require("dotenv").config();

let config = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGE_SENDER,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};
export const app = initializeApp(config);
