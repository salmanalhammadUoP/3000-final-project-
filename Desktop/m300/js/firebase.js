
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyDOYBE0w19Ipc6TXxTAChRM8GuWfRnAiW0",
  authDomain: "mylawyer-dfe9d.firebaseapp.com",
  projectId: "mylawyer-dfe9d",
  storageBucket: "mylawyer-dfe9d.firebasestorage.app",
  messagingSenderId: "820778991193",
  appId: "1:820778991193:web:2bafe786841c266187bb48",
  measurementId: "G-YMKZ4R5N7E"
};


const app = initializeApp(firebaseConfig);


const analytics = getAnalytics(app);


export const auth = getAuth(app);
export const db = getFirestore(app);
