import { createSelector } from 'reselect';

// Input Selector => returns SLICE of state
const selectShop = (state) => state.shop;

// Output Selector
export const selectShopCollections = createSelector(
    [selectShop],
    (shop) => shop.collections
);
