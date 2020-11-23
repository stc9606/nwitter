import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC8KUHWIr-jeOr-f986ph2dUZYofZe5lTU",
    authDomain: "nwitter-21542.firebaseapp.com",
    databaseURL: "https://nwitter-21542.firebaseio.com",
    projectId: "nwitter-21542",
    storageBucket: "nwitter-21542.appspot.com",
    messagingSenderId: "55116701099",
    appId: "1:55116701099:web:82e6282d2be29d342706ee"
  };
 
firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;

export const authService = firebase.auth();