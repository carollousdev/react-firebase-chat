// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCa8_OiRws9aUqWQ0Kvv_ZVRfRDNz38Ojo",
    authDomain: "reactchat-a64dd.firebaseapp.com",
    projectId: "reactchat-a64dd",
    storageBucket: "reactchat-a64dd.firebasestorage.app",
    messagingSenderId: "241586088326",
    appId: "1:241586088326:web:dd71359ea45fe528032407",
    measurementId: "G-CG5S61QCYR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();