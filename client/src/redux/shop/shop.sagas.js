import { takeLatest, call, put, all } from 'redux-saga/effects';

// Firebase Utils
import {
    firestore,
    convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';

// Shop Actions
import {
    fetchCollectionsSuccess,
    fetchCollectionsFailure,
} from './shop.actions';

// Shop Action-Types
import { ShopActionTypes } from './shop.types';

// Saga-based Tasks
// -- Handle Async Request for Fetching Collections from Firestore
export function* fetchCollectionsAsync() {
    // ----- Fetch Collections Data from Firestore -----
    try {
        // Get reference object to "collections" collection
        const collectionsRef = firestore.collection('collections');

        // Get snapshot & pause execution
        const snapshot = yield collectionsRef.get();

        // Convert snapshot to collectionsMap Object
        const collectionsMap = yield call(
            convertCollectionsSnapshotToMap,
            snapshot
        );

        // Update shopReducer:
        // -- isFetching: false
        // -- collections: collectionsMap
        yield put(fetchCollectionsSuccess(collectionsMap));
    } catch (error) {
        // Handle Errors
        // -- isFetching: false
        // -- errorMessage: error.message
        yield put(fetchCollectionsFailure(error.message));
    }
}

// Main Sagas
// -- initiate Fetch for Collections from Firestore
export function* fetchCollectionsStart() {
    yield takeLatest(
        ShopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionsAsync
    );
}

// Root
export function* shopSagas() {
    yield all([call(fetchCollectionsStart)]);
}
