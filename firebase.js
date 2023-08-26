import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDIzVyzzrYsI5jLLUqRxUMpFs6i_bdFcOs",
    authDomain: "decra-919a2.firebaseapp.com",
    projectId: "decra-919a2",
    storageBucket: "decra-919a2.appspot.com",
    messagingSenderId: "928785083428",
    appId: "1:928785083428:web:67f22c7a0b0d9cc5cdfcb1"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


