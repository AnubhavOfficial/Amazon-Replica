import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// eslint-disable-next-line no-unused-vars
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBr0LZpuljI-_P1U6VS1z89bop2XczjfHE",
  authDomain: "replica-6d668.firebaseapp.com",
  projectId: "replica-6d668",
  storageBucket: "replica-6d668.appspot.com",
  messagingSenderId: "838905129752",
  appId: "1:838905129752:web:c6dec84db83ab97ff74c6d",
  measurementId: "G-SRSVMDQWBS",
});

const auth = firebase.auth();

export { auth };
