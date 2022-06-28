// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmBVZrwyTE1iJ_-KEvlfNePJgknVnVs-M",
  authDomain: "netflixprojekat.firebaseapp.com",
  projectId: "netflixprojekat",
  storageBucket: "netflixprojekat.appspot.com",
  messagingSenderId: "872687285753",
  appId: "1:872687285753:web:034af8362035e5f4277928"
};

// Initialize Firebase
const app = !getApps().length? initializeApp(firebaseConfig):getApp()
const db=getFirestore()

export default app;
export {db}