import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDV40vhlJcWh6kJQe7Cana7XqFvqRsHYmE",
  authDomain: "toto-chat-275fd.firebaseapp.com",
  projectId: "toto-chat-275fd",
  storageBucket: "toto-chat-275fd.appspot.com",
  messagingSenderId: "670569674361",
  appId: "1:670569674361:web:2929647266f8f6777906a8",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
