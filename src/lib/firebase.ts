import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  "projectId": "studio-3408611377-3669a",
  "appId": "1:607293083466:web:eaa3d6e98b18272d653bb3",
  "storageBucket": "studio-3408611377-3669a.firebasestorage.app",
  "apiKey": "AIzaSyCryPPqjxlkFUnXDuGFsGdVXm_94JJikYg",
  "authDomain": "studio-3408611377-3669a.firebaseapp.com",
  "measurementId": "",
  "messagingSenderId": "607293083466"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);

export { app, auth };
