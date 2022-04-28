// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBiakXyXTsp5THoL_uQNiWdVTTq1b8A-rI",
    authDomain: "inventory-management-5ed59.firebaseapp.com",
    projectId: "inventory-management-5ed59",
    storageBucket: "inventory-management-5ed59.appspot.com",
    messagingSenderId: "241049479780",
    appId: "1:241049479780:web:e14882c3f7bc0cf3c80d71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;