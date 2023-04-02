import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/auth'
import 'firebase/compat/database'
import 'firebase/compat/storage'
import 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyDpbrk1LE2ko6iFB35Y72lHZNmuyR-rF_E",
  authDomain: "olx-clone-91abd.firebaseapp.com",
  projectId: "olx-clone-91abd",
  storageBucket: "olx-clone-91abd.appspot.com",
  messagingSenderId: "609388084156",
  appId: "1:609388084156:web:906ac4bfe2a229fae549b9",
  measurementId: "G-C5BVL8W49X"
};

export default firebase.initializeApp(firebaseConfig)