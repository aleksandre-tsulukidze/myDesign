import firebase from "firebase/app";
import  "firebase/storage";
import 'firebase/firestore';
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCZGTVBWjWbj4DCMTzo1wwS7klhuPbIZ5M",
  authDomain: "mydesign-6150a.firebaseapp.com",
  databaseURL: "https://mydesign-6150a-default-rtdb.firebaseio.com",
  projectId: "mydesign-6150a",
  storageBucket: "mydesign-6150a.appspot.com",
  messagingSenderId: "990994937705",
  appId: "1:990994937705:web:086e61395c5bdac8da2ff8",
  measurementId: "G-5GTSMXWY86" 
};

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const authent= firebase.auth();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {projectStorage, projectFirestore, authent, timestamp, firebase as default}