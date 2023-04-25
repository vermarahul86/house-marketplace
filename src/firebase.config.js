// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBs2RSSDCpAKd-d_DmPI3coPZeO7InD5nA",
  authDomain: "house-marketplace-app-2fa11.firebaseapp.com",
  projectId: "house-marketplace-app-2fa11",
  storageBucket: "house-marketplace-app-2fa11.appspot.com",
  messagingSenderId: "915833349218",
  appId: "1:915833349218:web:420c0f16a4ad876d385d3b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore()