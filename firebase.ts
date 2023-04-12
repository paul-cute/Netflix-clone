// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY_FIREBASE,
  authDomain: "netflix-clone-8554f.firebaseapp.com",
  projectId: "netflix-clone-8554f",
  storageBucket: "netflix-clone-8554f.appspot.com",
  messagingSenderId: "1003688533996",
  appId: "1:1003688533996:web:0005831a4f7df14a3c2ac9"
};

// Initialize Firebase
const app =!getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export {db, auth};