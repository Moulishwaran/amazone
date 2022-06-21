import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAJvZb0JCKWZc7wgGxsRc-F9O274tmDGpQ",
  authDomain: "e1-6f235.firebaseapp.com",
  projectId: "e1-6f235",
  storageBucket: "e1-6f235.appspot.com",
  messagingSenderId: "345348732508",
  appId: "1:345348732508:web:deae3fc53258d05e66d899",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
