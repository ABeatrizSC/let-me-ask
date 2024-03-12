import firebase from "firebase/compat/app";

//recursos utilizados do firebase
import 'firebase/auth';
import 'firebase/database'; 
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_DATABASE_URL,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID
};

firebase.initializeApp(firebaseConfig);
const auth = getAuth();
const database = firebase.database;

export { firebase, auth, database }