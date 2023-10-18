import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBvS2b6qkTuV4wE3exU_BVKeEsNNegahkQ",
  authDomain: "hms-fs.firebaseapp.com",
  databaseURL: "https://hms-fs-default-rtdb.firebaseio.com",
  projectId: "hms-fs",
  storageBucket: "hms-fs.appspot.com",
  messagingSenderId: "942857512707",
  appId: "1:942857512707:web:3f18950cdb3bb51f77ab36",
  measurementId: "G-LK4XQW9CK3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { firebase, db, auth, storage };
