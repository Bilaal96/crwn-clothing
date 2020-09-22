import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

// Input Selector => returns SLICE of state
const selectShop = (state) => state.shop;

// Output Selector
export const selectAllCollections = createSelector(
    [selectShop],
    (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
    [selectAllCollections],
    (collections) =>
        collections
            ? Object.keys(collections).map((key) => collections[key])
            : []
);

// NOTE: selectSingleCollection is a Curried Selector Function
export const selectSingleCollection = memoize((collectionUrlParam) =>
    createSelector([selectAllCollections], (collections) =>
        collections ? collections[collectionUrlParam] : null
    )
);
