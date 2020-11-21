// --- Memoized User Selectors ----
import { createSelector } from 'reselect';

// Input Selector => returns SLICE of state
const selectUser = (state) => state.user;

// Output Selectors
export const selectCurrentUser = createSelector(
    [selectUser], // array of input selectors
    (user) => user.currentUser // returns desired state value from the input selector
);
