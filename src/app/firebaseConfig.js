// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const provider = new GoogleAuthProvider();
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqsGGEJvbBG0bc1zlOIX3uXNY5MxJfRTE",
  authDomain: "l3-firebase-assignment-1.firebaseapp.com",
  projectId: "l3-firebase-assignment-1",
  storageBucket: "l3-firebase-assignment-1.appspot.com",
  messagingSenderId: "396640149222",
  appId: "1:396640149222:web:f3f83cc2778d513ac56527",
  measurementId: "G-SVGEGJZZ4B",
  clientId:
    "396640149222-4dljtlja6n510okqdechljr4oeat7gn3.apps.googleusercontent.com",
};

const app = initializeApp(firebaseConfig);


const auth = getAuth(app);
export { auth, provider };
