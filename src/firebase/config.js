// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtL6LedkYcp08hwUdrW3bDFdglpkEkzhs",
  authDomain: "personal-website-228ba.firebaseapp.com",
  projectId: "personal-website-228ba",
  storageBucket: "personal-website-228ba.appspot.com",
  messagingSenderId: "121713916542",
  appId: "1:121713916542:web:58d060d4b4aadc451ff62f",
  measurementId: "G-SQMYKKXG3Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export {analytics,db}