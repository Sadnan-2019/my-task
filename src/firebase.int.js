// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKGQO8OLxwv4mMIzxlggcMugZviRRl-qc",
  authDomain: "my-task-ad5e7.firebaseapp.com",
  projectId: "my-task-ad5e7",
  storageBucket: "my-task-ad5e7.appspot.com",
  messagingSenderId: "360162101156",
  appId: "1:360162101156:web:e833ffcdca15864514a331"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;