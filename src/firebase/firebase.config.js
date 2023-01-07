// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbnPAU3nH8eSbyBUsQq9HADYjclA2YmjM",
  authDomain: "pucpc-club.firebaseapp.com",
  projectId: "pucpc-club",
  storageBucket: "pucpc-club.appspot.com",
  messagingSenderId: "1038913898052",
  appId: "1:1038913898052:web:53a3efcf21896c33b25e11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;