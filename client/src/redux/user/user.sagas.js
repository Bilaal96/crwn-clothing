import { takeLatest, put, all, call } from 'redux-saga/effects';

// Action-Types Object
import UserActionTypes from './user.types';

// Actions
import {
    signInSuccess,
    signInFailure,
    signOutSuccess,
    signOutFailure,
    signUpSuccess,
    signUpFailure,
} from './user.actions';

// Firebase Utils
import {
    auth,
    googleProvider,
    createUserProfileDocument,
    getCurrentUserFromAuth,
} from '../../firebase/firebase.utils';

// Saga-based Tasks
// -- Get Snapshot from userAuth object
export function* getSnapshotFromUserAuth(userAuth, additionalData) {
    try {
        const userRef = yield call(
            createUserProfileDocument,
            userAuth,
            additionalData
        );
        const userSnapshot = yield userRef.get();

        // If successful, dispatch (put) signInSucces() Action
        yield put(
            signInSuccess({
                id: userSnapshot.id,
                ...userSnapshot.data(),
            })
        );
    } catch (error) {
        yield put(signInFailure(error));
    }
}

// -- Google Sign-in Logic
export function* signInWithGoogle() {
    try {
        // Destructure user Obj off userAuth
        const { user } = yield auth.signInWithPopup(googleProvider);

        yield getSnapshotFromUserAuth(user);
    } catch (error) {
        // Catches any errors thrown in try-block
        // Dispatch SIGN_IN_FAILURE
        yield put(signInFailure(error));
    }
}

// -- Email Sign-in Logic
export function* signInWithEmail({ payload: { email, password } }) {
    try {
        // Destructure user Obj off userAuth
        const { user } = yield auth.signInWithEmailAndPassword(email, password);

        yield getSnapshotFromUserAuth(user);
    } catch (error) {
        // Catches any errors thrown in try-block
        // Dispatch SIGN_IN_FAILURE
        yield put(signInFailure(error));
    }
}

// -- Check if User is authenticated
export function* isUserAuthenticated() {
    try {
        const userAuth = yield call(getCurrentUserFromAuth);

        // If userAuth is null, end Saga execution
        if (!userAuth) return;

        // If userAuth is NOT null, return userRef
        yield getSnapshotFromUserAuth(userAuth);
    } catch (error) {
        yield put(signInFailure(error));
    }
}

// -- Handle User Sign Out Process
export function* signOut({ payload: { history } }) {
    try {
        yield auth.signOut();
        yield put(signOutSuccess());
        history.push('/signin');
    } catch (error) {
        yield put(signOutFailure(error));
    }
}

// -- Sign Up Logic
export function* signUpWithEmail({
    payload: { displayName, email, password },
}) {
    try {
        const { user } = yield auth.createUserWithEmailAndPassword(
            email,
            password
        );

        yield put(
            signUpSuccess({
                user,
                additionalData: { displayName },
            })
        );
    } catch (error) {
        yield put(signUpFailure(error));
    }
}

export function* signInAfterSignUpSuccess({
    payload: { user, additionalData },
}) {
    yield getSnapshotFromUserAuth(user, additionalData);
}

// Main Sagas
// -- Initiate Sign-in Process
export function* onGoogleSignInStart() {
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onEmailSignInStart() {
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

// -- Check For User Session Persistence
export function* onCheckUserSession() {
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

// -- Initiate Sign Out Process
export function* onSignOutStart() {
    yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
}

// -- Initiate Sign Up Process
export function* onSignUpStart() {
    yield takeLatest(UserActionTypes.SIGN_UP_START, signUpWithEmail);
}

// -- Initiate Sign In After Successful Sign Up
export function* onSignUpSuccess() {
    yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUpSuccess);
}

export function* userSagas() {
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onCheckUserSession),
        call(onSignOutStart),
        call(onSignUpStart),
        call(onSignUpSuccess),
    ]);
}
