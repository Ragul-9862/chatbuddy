
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth,GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyC7YZuhBurPufCsE_kumkNRlSMQpuduCtk",
    authDomain: "chatbuddy-717d4.firebaseapp.com",
    projectId: "chatbuddy-717d4",
    storageBucket: "chatbuddy-717d4.appspot.com",
    messagingSenderId: "395703172927",
    appId: "1:395703172927:web:d13f233ac18f581f351d8a"
  };


 initializeApp(firebaseConfig);

 const auth = getAuth();
 const provider = new GoogleAuthProvider();
 const db = getFirestore()
 export {auth,provider,db}