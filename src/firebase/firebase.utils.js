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

// Store user in Firestore DB
export const createUserProfileDocument = async (userAuth, additionalData) => {
    // Guard clause for null user object
    if (!userAuth) return;

    // Query Firestore DB for documentReference Object of specified user
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    // Async-ly get documentSnapshot object from documentReference
    const userSnapshot = await userRef.get();

    // if user does not exist, create userSnapshot data
    // Check prevents duplicate users
    if (!userSnapshot.exists) {
        // Gather data we want to store
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        // Async Request to store data in Firestore
        try {
            // Create data via userRef.set() passing in gathered data, as well as additionalData param
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData,
            });
        } catch (error) {
            console.log('error creating user:', error.message);
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Config Sign-in with Google Feature
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
