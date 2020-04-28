import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

//? firebaseConfig object
const config = {
    apiKey: 'AIzaSyAqwb3ZXWi9HSYgnOeUtI5lpK97p_QfQL8',
    authDomain: 'crwn-db-8b780.firebaseapp.com',
    databaseURL: 'https://crwn-db-8b780.firebaseio.com',
    projectId: 'crwn-db-8b780',
    storageBucket: 'crwn-db-8b780.appspot.com',
    messagingSenderId: '839433946732',
    appId: '1:839433946732:web:474b29a5aa9f319f84fa49',
    measurementId: 'G-CY3LTF3DQQ',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
