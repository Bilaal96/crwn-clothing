import { createSelector } from 'reselect';

const selectNav = (state) => state.nav;

export const selectIsSideNavOpen = createSelector(
    [selectNav],
    (nav) => nav.isSideNavOpen
);
