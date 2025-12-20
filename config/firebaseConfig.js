// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJk_O_2sGVeU13w-amj-XkA8h5KW1BEcg",
  authDomain: "sn-ecomm.firebaseapp.com",
  projectId: "sn-ecomm",
  storageBucket: "sn-ecomm.firebasestorage.app",
  messagingSenderId: "428571074024",
  appId: "1:428571074024:web:b8249397021a96b2d7585d",
  measurementId: "G-C8RT9PGHB8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);