import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

// Input Selector => returns SLICE of state
const selectShop = (state) => state.shop;

// Output Selector
export const selectShopCollections = createSelector(
    [selectShop],
    (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
    [selectShopCollections],
    (collections) => Object.keys(collections).map((key) => collections[key])
);

// NOTE: selectShopCollection is a Curried Selector Function
export const selectShopCollection = memoize((collectionUrlParam) =>
    createSelector(
        [selectShopCollections],
        (collections) => collections[collectionUrlParam]
    )
);
