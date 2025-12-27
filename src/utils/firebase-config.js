import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyA8gCWAdmYkiGPR6BCUea_ldzw7yQqRnm8",
  authDomain: "netflix-clone-6a786.firebaseapp.com",
  projectId: "netflix-clone-6a786",
  storageBucket: "netflix-clone-6a786.firebasestorage.app",
  messagingSenderId: "335271374730",
  appId: "1:335271374730:web:5667ad4d3c1fd4d57c6273",
  measurementId: "G-CPWVLWJRQQ"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app)