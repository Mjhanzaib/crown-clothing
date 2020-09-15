import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const Config = {
  apiKey: "AIzaSyBDkcc26knvfkluZbsyTUVJQfhhrwPe7Pw",
  authDomain: "crown-db-1.firebaseapp.com",
  databaseURL: "https://crown-db-1.firebaseio.com",
  projectId: "crown-db-1",
  storageBucket: "crown-db-1.appspot.com",
  messagingSenderId: "679379324324",
  appId: "1:679379324324:web:1052ae835d9fce62220531",
  measurementId: "G-3PF0SJRQZL",
};

firebase.initializeApp(Config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
