import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Replace with your actual Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyApdqmA_r6wxJ03cExE_mApb86XOASqF8k",
  authDomain: "election-1201c.firebaseapp.com",
  projectId: "election-1201c",
  storageBucket: "election-1201c.firebasestorage.app",
  messagingSenderId: "74314534644",
  appId: "1:74314534644:web:7fc4238cad98d1c89958a1",
  measurementId: "G-QH1CMGLZLB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
