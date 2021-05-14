import { ShopActionTypes } from './shop.types';

// Firebase Utils - for Redux Thunk - EXAMPLE ONLY (see below)
/* import {
    firestore,
    convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils'; */

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

/**
 * ----- Redux Thunk - EXAMPLE ONLY: Fetching Collections -----
 * def: Thunk => An async action-creator func that returns a FUNC with dispatch() as a param
 *^ as opposed to the standard action-creator func which returns an action-object
 
 ** The function returned by a Thunk is used to:
    *^ execute some async logic
    *^ handle the success & failure cases depending on the the result of the async logic

 * NOTE: this function serves as an example only - the async logic of the Thunk was adapted for use in a Shop Saga: fetchCollectionsAync()
 */
/* export const fetchCollectionsAsync = () => {
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
}; */
