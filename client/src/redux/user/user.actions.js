import UserActionTypes from './user.types';

// SIGN IN
// -- Start => with Google Account
export const googleSignInStart = () => ({
    type: UserActionTypes.GOOGLE_SIGN_IN_START,
});

// -- Start => with Email
export const emailSignInStart = (emailAndPassword) => ({
    type: UserActionTypes.EMAIL_SIGN_IN_START,
    payload: emailAndPassword,
});

// -- Success
export const signInSuccess = (user) => ({
    type: UserActionTypes.SIGN_IN_SUCCESS,
    payload: user,
});

// -- Failure
export const signInFailure = (error) => ({
    type: UserActionTypes.SIGN_IN_FAILURE,
    payload: error,
});

// CHECK USER SESSION
// -- Check if User Session Persisted
export const checkUserSession = () => ({
    type: UserActionTypes.CHECK_USER_SESSION,
});

// SIGN OUT
// -- Start
export const signOutStart = (history) => ({
    type: UserActionTypes.SIGN_OUT_START,
    payload: { history },
});

// -- Success
export const signOutSuccess = () => ({
    type: UserActionTypes.SIGN_OUT_SUCCESS,
});

// -- Failure
export const signOutFailure = (error) => ({
    type: UserActionTypes.SIGN_OUT_FAILURE,
    payload: error,
});

// SIGN UP
// -- Start
export const signUpStart = (newUserCredentials) => ({
    type: UserActionTypes.SIGN_UP_START,
    payload: newUserCredentials,
});

// -- Success
export const signUpSuccess = ({ user, additionalData }) => ({
    type: UserActionTypes.SIGN_UP_SUCCESS,
    payload: { user, additionalData },
});

// -- Failure
export const signUpFailure = (error) => ({
    type: UserActionTypes.SIGN_UP_FAILURE,
    payload: error,
});
