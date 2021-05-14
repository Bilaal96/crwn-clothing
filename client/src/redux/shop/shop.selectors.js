import { createSelector } from 'reselect';

// Input Selectors => returns SLICE of state
const selectShop = (state) => state.shop;

// -- provides selectSingleCollection with collectionId URL param
const selectCollectionIdParam = (state, props) =>
    props.match.params.collectionId;

// Output Selectors
export const selectAllCollections = createSelector(
    [selectShop],
    (shop) => shop.collections
);

// Convert collections obj to array; returns array
export const selectCollectionsForPreview = createSelector(
    [selectAllCollections],
    (collections) =>
        collections
            ? Object.keys(collections).map((key) => collections[key])
            : []
);

// ! FOR REFERENCE: This implementation with lodash.memoize() does NOT work with useSelector() Hook
// NOTE: Here selectSingleCollection is a Curried Selector Function
// -- As it requires an argument to be passed to it
/* export const selectSingleCollection = memoize((collectionUrlParam) =>
    createSelector([selectAllCollections], (collections) =>
        collections ? collections[collectionUrlParam] : null
    )
); */

// * This implementation works with or without useSelector() Hook
// -- eliminates the need for lodash.memoize as dependency
export const selectSingleCollection = createSelector(
    [selectAllCollections, selectCollectionIdParam],
    (collections, collectionIdParam) =>
        collections ? collections[collectionIdParam] : null
);

// Get isFetching state-value
export const selectIsCollectionsFetching = createSelector(
    [selectShop],
    (shop) => shop.isFetching
);

// Determine true/false value for => whether "collections" collection has been fetched from Firestore
export const selectIsCollectionsLoaded = createSelector(
    [selectShop],
    (shop) => !!shop.collections
);
