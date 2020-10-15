import { ShopActionTypes } from './shop.types';

// Firebase Utils
import {
    firestore,
    convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';

// Actions that modify the shopReducer
export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap,
});

export const fetchCollectionsFailure = (errorMessage) => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage,
});

// Thunk => Async action that we dispatch in our component
export const fetchCollectionsAsync = () => {
    return (dispatch) => {
        // ----- Fetch Collections Data from Firestore -----
        // --- Promise Pattern ---
        // Get reference object to "collections" collection
        const collectionsRef = firestore.collection('collections');

        // Set isFetching: true in shopReducer
        dispatch(fetchCollectionsStart());

        // Begin async request for collections
        collectionsRef
            .get()
            .then((snapshot) => {
                // Convert collections snapshot from array to object using custom firebase util function
                const collectionsMap = convertCollectionsSnapshotToMap(
                    snapshot
                );

                // Update shopReducer:
                // -- isFetching: false
                // -- collections: collectionsMap
                dispatch(fetchCollectionsSuccess(collectionsMap));
            })
            .catch((error) => dispatch(fetchCollectionsFailure(error.message)));
    };
};
