// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "r-estate-88005.firebaseapp.com",
  projectId: "r-estate-88005",
  storageBucket: "r-estate-88005.firebasestorage.app",
  messagingSenderId: "873849360774",
  appId: "1:873849360774:web:31b14c4cebd208db349c07"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);