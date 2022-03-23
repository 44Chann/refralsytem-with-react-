import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKnsz456zlCFyBA_7W0yw6VDaazU8AdXk",
  authDomain: "refralsapp.firebaseapp.com",
  projectId: "refralsapp",
  storageBucket: "refralsapp.appspot.com",
  messagingSenderId: "435185955935",
  appId: "1:435185955935:web:11521b9f54996b994257ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
