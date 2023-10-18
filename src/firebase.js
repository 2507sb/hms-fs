import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'; 


const firebaseConfig={
  apiKey: "AIzaSyAOHExCOn2i8w9-nYa_XyYGhqdoWY9lPLw",
  authDomain: "project-29f89.firebaseapp.com",
  projectId: "project-29f89",
  storageBucket: "project-29f89.appspot.com",
  messagingSenderId: "183217600807",
  appId: "1:183217600807:web:04adf3f263cb5640ad5102",
  measurementId: "G-2L1XGHC1Q7"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {
 db,auth, storage,firebase as default
}

