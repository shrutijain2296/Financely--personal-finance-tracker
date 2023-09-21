// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore, doc, setDoc} from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDp-FzKLtqvg-giwevm3xKjJ3Dhb_JUkfk",
  authDomain: "financely-finance-tracker.firebaseapp.com",
  projectId: "financely-finance-tracker",
  storageBucket: "financely-finance-tracker.appspot.com",
  messagingSenderId: "662683098634",
  appId: "1:662683098634:web:c332b606093d31969389f3",
  measurementId: "G-F5QNP33M0Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {db, auth, provider, doc, setDoc};