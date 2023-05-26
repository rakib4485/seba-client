// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyAQVfXq8vL7taSrjhJzpKzjqTLjLtcHmpI",

  authDomain: "psychology-buzz.firebaseapp.com",

  projectId: "psychology-buzz",

  storageBucket: "psychology-buzz.appspot.com",

  messagingSenderId: "385616743308",

  appId: "1:385616743308:web:58a7909a8742e80c4e64a9"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export default app;