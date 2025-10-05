// firebase.js
import { initializeApp, getApps } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAK7ziOc6PhUoZNNR5cb7gg2hsQraulIck",
  authDomain: "smart-house-da82a.firebaseapp.com",
  databaseURL: "https://smart-house-da82a-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "smart-house-da82a",
  storageBucket: "smart-house-da82a.firebasestorage.app",
  messagingSenderId: "143775299379",
  appId: "1:143775299379:web:330a4943924dc344f7b046",
  measurementId: "G-S03R4XDWRV"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];


let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}


export const database = getDatabase(app);
