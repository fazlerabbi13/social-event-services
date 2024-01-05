// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCAHPtG6U9Ha0vidf1ffuSbIJyYcN-HOEM",
  authDomain: "social-event-services.firebaseapp.com",
  projectId: "social-event-services",
  storageBucket: "social-event-services.appspot.com",
  messagingSenderId: "567619511904",
  appId: "1:567619511904:web:4c34c65d7cc18552ecc505"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);