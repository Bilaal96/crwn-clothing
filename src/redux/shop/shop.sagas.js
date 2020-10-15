import { takeLatest, call, put } from 'redux-saga/effects';

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

export function* fetchCollectionsAsync() {
    console.log(
        'fetchCollectionsStart() Action was triggered, execute logic inside fetchCollectionsAsync() Saga'
    );

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

export function* fetchCollectionsStart() {
    console.log(
        'sagaMiddleware ran fetchCollectionsStart() Saga --> now listening for FETCH_COLLECTIONS_START Action'
    );

    yield takeLatest(
        ShopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionsAsync
    );
}
