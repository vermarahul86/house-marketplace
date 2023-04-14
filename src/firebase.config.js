// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD83T6ujnwvXkktPMkbxijmCIjecbuvJaw",
  authDomain: "house-marketplace-app-a7c03.firebaseapp.com",
  projectId: "house-marketplace-app-a7c03",
  storageBucket: "house-marketplace-app-a7c03.appspot.com",
  messagingSenderId: "663455986598",
  appId: "1:663455986598:web:d9f2055912a693ddd05567"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore()