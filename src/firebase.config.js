// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACxp18GRdoiz18Z27LEO3Z61JwTqkncO0",
  authDomain: "real-estate-project-95a40.firebaseapp.com",
  projectId: "real-estate-project-95a40",
  storageBucket: "real-estate-project-95a40.appspot.com",
  messagingSenderId: "591385320724",
  appId: "1:591385320724:web:a8e5d168bb25a2d977b601"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;