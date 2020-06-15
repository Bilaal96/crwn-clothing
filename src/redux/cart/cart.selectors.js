import { createSelector } from 'reselect';

// Input Selector
const selectCart = (state) => state.cart;

// Output Selectors
export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) =>
        cartItems.reduce(
            (accumulatedQuantity, cartItem) =>
                accumulatedQuantity + cartItem.quantity,
            0
        )
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
    cartItems.reduce(
        (accumulatedTotal, cartItem) =>
            accumulatedTotal + cartItem.price * cartItem.quantity,
        0
    )
);

export const selectCartHidden = createSelector(
    [selectCart],
    (cart) => cart.hidden
);
