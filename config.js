import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8xzMdTc55ii0t61IC9Ctj-JkCD_hPci4",
  authDomain: "e-ride4-7b21b.firebaseapp.com",
  projectId: "e-ride4-7b21b",
  storageBucket: "e-ride4-7b21b.appspot.com",
  messagingSenderId: "180248453599",
  appId: "1:180248453599:web:8900db8ca5f8ee34ca646a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
