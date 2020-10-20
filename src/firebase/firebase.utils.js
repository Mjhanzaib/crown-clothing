import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
const Config = {
  apiKey: "AIzaSyARkdZw2EZ60KmahMOtBehLhxbdb14lXh8",
  authDomain: "nd-project-dac60.firebaseapp.com",
  databaseURL: "https://nd-project-dac60.firebaseio.com",
  projectId: "nd-project-dac60",
  storageBucket: "nd-project-dac60.appspot.com",
  messagingSenderId: "367981854884",
  appId: "1:367981854884:web:574eb45026f73da20ae631",
  measurementId: "G-Q2KE6Q4K10",
};

//take user auth object from google auth and store it in in firebase firestore.

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(Config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// setup sign in with google utility

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

// firebase.collection('').doc('').collection('').doc('');
// firebase.doc('/users/doc_id/collection/doc_id');
// firebase.collection('/users/doc_id/collection');
