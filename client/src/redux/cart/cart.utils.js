export const addItemToCart = (cartItems, cartItemToAdd) => {
    // Check if cartItemToAdd exists in Cart
    // returns first item found in cartItems array that matches cartItemToAdd
    // returns undefined if no match is found
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToAdd.id
    );

    if (existingCartItem) {
        // if cartItemToAdd exists in cart, return new cartItems array with:
        //  - cartItem object with increased quantity property
        return cartItems.map((cartItem) =>
            cartItem.id === cartItemToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }

    // If the cartItemToAdd does not already exist in cartItems,
    // create the cartItem with a base quantity of 1
    // returning the cartItems in a new array
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    // Check if item that we want to remove exists
    // --> inverse of utility: addItemToCart()
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToRemove.id
    );

    // Clear the item if it's quantity property equals 1
    // --> similar to clearItemFromCart Action
    if (existingCartItem.quantity === 1) {
        return cartItems.filter(
            (cartItem) => cartItem.id !== cartItemToRemove.id
        );
    }

    // Reduce quantity property of item by 1 if quantity > 1
    // Otherwise return cartItem as is
    // --> inverse of utility: addItemToCart()
    return cartItems.map((cartItem) =>
        cartItem.id === cartItemToRemove.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    );
};
