import { getFirestore } from "@firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDmtbzNwVCGcfR7g8bdSw2q7c31qNRn6tE",
  authDomain: "first-project-9dde2.firebaseapp.com",
  projectId: "first-project-9dde2",
  storageBucket: "first-project-9dde2.firebasestorage.app",
  messagingSenderId: "542659565960",
  appId: "1:542659565960:web:b02e97841da33eca3f023d",
  measurementId: "G-8WPX6G6VMD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore = getFirestore(app);
export const auth = getAuth(app);
