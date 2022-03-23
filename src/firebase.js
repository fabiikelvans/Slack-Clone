import 'firebase/compat/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBgp_B2l6if9wfcIbaf5-IKbInqpFA5bX8",
    authDomain: "slack-clone-f6da6.firebaseapp.com",
    projectId: "slack-clone-f6da6",
    storageBucket: "slack-clone-f6da6.appspot.com",
    messagingSenderId: "257170729645",
    appId: "1:257170729645:web:53e5c08c5572df85c9f424"
  };
  
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);

  const db = app.firestore();

  const provider = new GoogleAuthProvider();

  const auth = firebase.auth();

 export { auth, provider, app};

 export default db;

