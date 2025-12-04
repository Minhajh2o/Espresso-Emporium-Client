// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXBWUpMG3SnrSBV9Vv1c5HekWp5pV8xlA",
  authDomain: "espresso-emporium-3aad9.firebaseapp.com",
  projectId: "espresso-emporium-3aad9",
  storageBucket: "espresso-emporium-3aad9.firebasestorage.app",
  messagingSenderId: "878726111058",
  appId: "1:878726111058:web:71328ef5cdbc5cf48be48b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);