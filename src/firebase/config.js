import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/auth'
import 'firebase/compat/database'
import 'firebase/compat/storage'
import 'firebase/storage'


const firebaseConfig = {
  
};

export default firebase.initializeApp(firebaseConfig)
