import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

const COLLECTION_ID_MAP = {
    hats: 1,
    footwear: 2,
    jackets: 3,
    womens: 4,
    mens: 5,
};

// Input Selector => returns SLICE of state
const selectShop = (state) => state.shop;

// Output Selector
export const selectShopCollections = createSelector(
    [selectShop],
    (shop) => shop.collections
);

// NOTE: selectShopCollection is a Curried Selector Function
export const selectShopCollection = memoize((collectionUrlParam) =>
    createSelector([selectShopCollections], (collections) =>
        collections.find(
            (collection) =>
                collection.id === COLLECTION_ID_MAP[collectionUrlParam]
        )
    )
);
