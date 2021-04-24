import { NavActionTypes } from './nav.types';

const INITIAL_STATE = {
    isSideNavOpen: true,
};

const navReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case NavActionTypes.TOGGLE_SIDE_NAV:
            return {
                ...state,
                isSideNavOpen: !state.isSideNavOpen,
            };
        case NavActionTypes.CLOSE_SIDE_NAV:
            return {
                ...state,
                isSideNavOpen: false,
            };
        default:
            return state;
    }
};

export default navReducer;
