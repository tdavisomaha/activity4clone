import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD8jPDOjdg0Fnjs27qMEsK3ZBTnRP-ZCBE",
    authDomain: "subscriptions-94f54.firebaseapp.com",
    projectId: "subscriptions-94f54",
    storageBucket: "subscriptions-94f54.firebasestorage.app",
    messagingSenderId: "619046622749",
    appId: "1:619046622749:web:f5368af33ca38d8e31d8f4"
};

const db = firebase.initializeApp(firebaseConfig);
export default db.firestore();
