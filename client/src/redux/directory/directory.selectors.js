import { createSelector } from 'reselect';

// Input Selector => returns SLICE of state
const selectDirectory = (state) => state.directory;

// Output Selectors
export const selectDirectorySections = createSelector(
    [selectDirectory],
    (directory) => directory.sections
);
