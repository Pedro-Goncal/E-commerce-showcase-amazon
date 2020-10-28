import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAVMT0U_AJdRw226E-hAa3_ONlferNe19U",
  authDomain: "project-d3bc4.firebaseapp.com",
  databaseURL: "https://project-d3bc4.firebaseio.com",
  projectId: "project-d3bc4",
  storageBucket: "project-d3bc4.appspot.com",
  messagingSenderId: "921459592029",
  appId: "1:921459592029:web:d7f366f04d07c4214eb6b4",
};

//Initialize Fire base
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const facebookAuth = new firebase.auth.FacebookAuthProvider();

const googleAuth = new firebase.auth.GoogleAuthProvider();

export { db, auth, facebookAuth, googleAuth };

//Gloabal install firebase
//npm install -g firebase-tools

//Project install
//npm install firebase

//Log in to fire base
//firebase login

//Initialize fire base
//firebase init

//Build project first
//npm run build

//Deploy to firebase
//firebase deploy
