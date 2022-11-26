
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAcKsUF8ntTJsOfGbFQN7nceNBw5wdkSB0",
    authDomain: "react-go-gauchos.firebaseapp.com",
    projectId: "react-go-gauchos",
    storageBucket: "react-go-gauchos.appspot.com",
    messagingSenderId: "838299278261",
    appId: "1:838299278261:web:50571c5be3d80e2fd697fc",
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const collectionProd = collection(db, 'productos');
