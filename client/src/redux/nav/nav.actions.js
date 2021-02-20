import { NavActionTypes } from './nav.types';

export const toggleSideNav = () => ({
    type: NavActionTypes.TOGGLE_SIDE_NAV,
});

export const closeSideNav = () => ({
    type: NavActionTypes.CLOSE_SIDE_NAV,
});
