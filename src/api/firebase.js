import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyA1CvSXcFyFKXtbrCF6VHngfz6R5KXZVlo",
  authDomain: "my-pers-c7bcc.firebaseapp.com",
  projectId: "my-pers-c7bcc",
  storageBucket: "my-pers-c7bcc.appspot.com",
  messagingSenderId: "852281323776",
  appId: "1:852281323776:web:611e270528ad79a357c3e5",
  measurementId: "G-VX5HHGPWPP"
};

firebase.initializeApp(firebaseConfig);
//firebase.analytics();

export const auth = firebase.auth();
//export const firestore = firebase.firestore();