import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

// Actions
import { toggleCartHidden } from '../../redux/cart/cart.actions';
// Selectors
import { selectCartItems } from '../../redux/cart/cart.selectors';

// Components
import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';

import './cart-dropdown.styles.scss';

const CartDropdown = () => {
    // Get cartItems via Cart selector
    const cartItems = useSelector(selectCartItems);

    // Get dispatch() function from React Redux Lib
    const dispatch = useDispatch();

    // Get history object from React Router DOM Lib
    const history = useHistory();

    useEffect(() => {
        const handleToggleCartHidden = (e) => {
            const cartDropdown = document.querySelector('.cart-dropdown');

            // Is event.target the cartDropdown itself? return / DO NOTHING
            if (e.target === cartDropdown) return;

            // Is event.target a descendant of cartDropdown?
            if (cartDropdown.contains(e.target)) {
                // If so, is event.target the cart-checkout-btn?
                // -- yes => hide CartDropdown
                if (e.target.classList.contains('cart-checkout-btn'))
                    dispatch(toggleCartHidden());

                // -- no, is not cart-checkout-btn => return / DO NOTHING
                return;
            } else {
                // Is e.target an element external to CartDropdown (i.e. a sibling / parent /ancestor)? => hide CartDropdown
                dispatch(toggleCartHidden());
            }
        };

        document.addEventListener('click', handleToggleCartHidden);
        return () => {
            document.removeEventListener('click', handleToggleCartHidden);
        };
    });

    return (
        <div className="cart-dropdown">
            {cartItems.length ? (
                <div className="cart-items">
                    {cartItems.map((cartItem) => (
                        <CartItem key={cartItem.id} item={cartItem} />
                    ))}
                </div>
            ) : (
                <span className="cart-empty">Your cart is empty</span>
            )}
            <CustomButton
                className="cart-checkout-btn"
                onClick={() => history.push('/checkout')}
                inverted
            >
                GO TO CHECKOUT
            </CustomButton>
        </div>
    );
};

export default CartDropdown;
