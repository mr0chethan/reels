import firebase from "firebase/app";

import "firebase/firestore";

import "firebase/auth";

import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCQMME3u55WDKZZyOS7Jom5zimnSnZNOvw",
  authDomain: "reels-app-540be.firebaseapp.com",
  projectId: "reels-app-540be",
  storageBucket: "reels-app-540be.appspot.com",
  messagingSenderId: "599991087279",
  appId: "1:599991087279:web:3b585196c75158d4f0645a"
};
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage()


let provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
