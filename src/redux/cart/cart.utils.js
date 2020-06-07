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

    // If the cartItemToAdd does not already exist in cartItems, create the cartItem with a base quantity of 1
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
