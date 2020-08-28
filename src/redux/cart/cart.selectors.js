// --- Memoized Cart Selectors ----
import { createSelector } from 'reselect';

// Input Selector => returns SLICE of state
const selectCart = (state) => state.cart;

// Output Selectors
export const selectCartItems = createSelector(
    [selectCart], // array of input selectors
    (cart) => cart.cartItems // returns desired state value from the input selector
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
