import firebase from "firebase/compat/app";

//recursos utilizados do firebase
import 'firebase/auth';
import 'firebase/database';

export const auth = firebase.auth;
export const database = firebase.database;

const firebaseConfig = {
    apiKey: import.meta.env.API_KEY,
    authDomain: import.meta.env.AUTH_DOMAIN,
    databaseURL: import.meta.env.DATABASE_URL,
    projectId: import.meta.env.PROJECT_ID,
    storageBucket: import.meta.env.STORAGE_BUCKET,
    messagingSenderId: import.meta.env.MESSAGING_SENDER_ID,
    appId: import.meta.env.APP_ID
  };

  firebase.initializeApp(firebaseConfig);