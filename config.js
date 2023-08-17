import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyDKGpFWOtvPIR_zXEEaDPJyatrNNv58B8U",
  authDomain: "projeto-71-e5190.firebaseapp.com",
  projectId: "projeto-71-e5190",
  storageBucket: "projeto-71-e5190.appspot.com",
  messagingSenderId: "1002749476848",
  appId: "1:1002749476848:web:8423fa50812be274cf2735"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
