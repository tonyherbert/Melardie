import { initializeApp } from "firebase/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

let config = {
  apiKey: process.env.REACT_APP_FB_API_KEY,
  authDomain: process.env.REACT_APP_FB_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FB_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FB_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FB_MESSAGE_SENDER,
  appId: process.env.REACT_APP_FB_APP_ID,
};
export const app = initializeApp(config);
