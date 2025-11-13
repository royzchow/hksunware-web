// lib/firebaseClient.js
import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBDfOZlOdruo9prqh8QWvRHrTS0tNU_Oo0",
  authDomain: "hksunware-c8b1c.firebaseapp.com",
  projectId: "hksunware-c8b1c",
  storageBucket: "hksunware-c8b1c.appspot.com",
  messagingSenderId: "277339637433",
  appId: "1:277339637433:web:aa87056f4be05cdcbbbd68",
  measurementId: "G-72DB438Q2E",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
export const db = getFirestore(app);
