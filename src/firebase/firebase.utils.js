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

//? init firebase app
firebase.initializeApp(config);

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

/**
 * --- Store Frontend Data as Collection in Firestore ---
 * @param collectionKey => name of collection
 * @param objectsToAdd => array of objects (products/items) we wish to add to Firestore
 */
export const addCollectionAndDocuments = async (
    collectionKey,
    objectsToAdd
) => {
    // Create Collection via collectionKey
    // -- Query will return a collectionRef
    // -- even if the queried collection doesn't already exist
    const collectionRef = firestore.collection(collectionKey);
    // console.log('collectionRef', collectionRef);

    // Get new write batch
    const batch = firestore.batch();

    // For every element in collectionsArray
    // -- where each element is an object
    objectsToAdd.forEach((obj) => {
        // create a docRef with a unique docId
        // -- as we do not specify a docId
        // -- firestore will generate unique IDs for us
        const newDocRef = collectionRef.doc();

        // Prepare batch write => Set fields of current newDocRef to current collectionsArray el/object
        batch.set(newDocRef, obj);
    });

    // Commit the batch => i.e. call batched writes
    // -- returns promise that resolves with null/void value
    return await batch.commit();
};

/**
 * --- Convert Collections Array to Object ---
 * @param collectionsSnapshot => snapshot retrieved from a collectionRef via onSnapshot()
 */
export const convertCollectionsSnapshotToMap = (collectionsSnapshot) => {
    // Transform array of document objects
    // -- i.e. add the corresponding id & routeName properties to each document object
    const transformedCollections = collectionsSnapshot.docs.map((doc) => {
        // Get desired document data
        const { title, items } = doc.data();

        // return transformed object to mapped array
        return {
            id: doc.id,
            title,
            routeName: encodeURI(title.toLowerCase()),
            items,
        };
    });

    // Convert transformedCollections from Array to Object
    return transformedCollections.reduce((accumulator, currCollection) => {
        accumulator[currCollection.title.toLowerCase()] = currCollection;
        return accumulator;
    }, {});
};

// Export Firebase Auth & Firestore Instances
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Config Sign-in with Google Feature
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
