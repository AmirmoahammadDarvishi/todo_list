// Import the functions you need from the SDKs you need
import { initializeApp, database } from "firebase/app";
import firebase from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
      apiKey: "AIzaSyBan3gE11fcTkcCA0V1nYRLeUTNHKzIPYY",
      authDomain: "todo-list-61022.firebaseapp.com",
      projectId: "todo-list-61022",
      storageBucket: "todo-list-61022.appspot.com",
      messagingSenderId: "873955788426",
      appId: "1:873955788426:web:a543f6ab5b11c557410f73",
      measurementId: "G-YB3PJDMYD1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const databaseRef = firebase.database().ref();
