import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAL5i88eAEVJnBtGlN_dsv8tUP9HQEQq5c",
  authDomain: "mugil-database.firebaseapp.com",
  projectId: "mugil-database",
  storageBucket: "mugil-database.firebasestorage.app",
  messagingSenderId: "954608237264",
  appId: "1:954608237264:web:8f97c0cc80f29da08bbcd5",
  measurementId: "G-HB902DJLDJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);
