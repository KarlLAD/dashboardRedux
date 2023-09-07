// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage' ;
import { getAuth } from 'firebase/auth' ; 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgAvn01i2Ryx90s54mHpJtzW9IJDS81mU",
  authDomain: "dashboard-9fc20.firebaseapp.com",
  projectId: "dashboard-9fc20",
  storageBucket: "dashboard-9fc20.appspot.com",
  messagingSenderId: "477167337940",
  appId: "1:477167337940:web:2633c60c37d3e338ca1641"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const dbFirestore = getFirestore( app ) ;

export const storage = getStorage( app ) ;

export const auth = getAuth( app ) ;