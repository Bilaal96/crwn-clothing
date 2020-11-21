import UserActionTypes from './user.types';

const INITIAL_STATE = {
    currentUser: null,
    error: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        // SIGN IN / SIGN UP SUCCESS
        case UserActionTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                error: null,
            };
        // SIGN OUT SUCCESS
        case UserActionTypes.SIGN_OUT_SUCCESS:
            return {
                ...state,
                currentUser: null,
                error: null,
            };
        // SIGN IN / SIGN OUT / SIGN UP FAILURE
        case UserActionTypes.SIGN_IN_FAILURE:
        case UserActionTypes.SIGN_OUT_FAILURE:
        case UserActionTypes.SIGN_UP_FAILURE:
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default userReducer;
