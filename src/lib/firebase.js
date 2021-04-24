import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyC1eRWaD5_-y0DOhUNHrZXlquUSakOOjng",
  authDomain: "instagram-f1689.firebaseapp.com",
  projectId: "instagram-f1689",
  storageBucket: "instagram-f1689.appspot.com",
  messagingSenderId: "140530677925",
  appId: "1:140530677925:web:82bdb4fd859b8496ba354c",
};
const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

seedDatabase(firebase);

export { firebase, FieldValue };
