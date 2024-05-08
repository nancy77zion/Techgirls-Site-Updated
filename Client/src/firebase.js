
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "lms-techgirl.firebaseapp.com",
  projectId: "lms-techgirl",
  storageBucket: "lms-techgirl.appspot.com",
  messagingSenderId: "31563078335",
  appId: "1:31563078335:web:fd1433cb39500f32bd840a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);