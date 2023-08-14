
import { initializeApp } from "firebase/app";
import {getFirestore, collection} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyB5Z5KsFbEEtzMITP2VHjvT-NJCrTWTeF4",
  authDomain: "filmy-app-c2734.firebaseapp.com",
  projectId: "filmy-app-c2734",
  storageBucket: "filmy-app-c2734.appspot.com",
  messagingSenderId: "220484727965",
  appId: "1:220484727965:web:f82ad3d8e4c69dfcce9074"
};

const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
export const moviesRef=collection(db, "movies");
export const reviewsRef=collection(db, "reviews");
export const usersRef=collection(db, "users");
export default app;