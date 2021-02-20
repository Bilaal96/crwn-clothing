import { takeLatest, all, call, put } from 'redux-saga/effects';

// Actions
// -- types
import UserActionTypes from '../user/user.types';
// -- creators
import { clearCart } from './cart.actions';

// Saga-based Tasks
// -- Clear Cart when user Signs Out
export function* clearCartOnSignOut() {
    yield put(clearCart());
}

// Main Sagas
// -- spawn clearCartOnSignOut Saga on successful Sign Out
export function* onSignOutSuccess() {
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

// Root
export function* cartSagas() {
    yield all([call(onSignOutSuccess)]);
}
