import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

// Actions
// -- Cart
import { toggleCartHidden } from '../../redux/cart/cart.actions';
// -- Nav
import { closeSideNav } from '../../redux/nav/nav.actions';

// Selectors
// -- Cart
import { selectCartItems } from '../../redux/cart/cart.selectors';
// -- Nav
import { selectIsSideNavOpen } from '../../redux/nav/nav.selectors';

// Components
import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';

// Styled Components
import * as SC from './cart-dropdown.styles';

const CartDropdown = () => {
    const cartItems = useSelector(selectCartItems);
    const isSideNavOpen = useSelector(selectIsSideNavOpen);

    const dispatch = useDispatch();

    // react-router's history fn
    const history = useHistory();

    useEffect(() => {
        const handleOutsideClick = (e) => {
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

        document.addEventListener('click', handleOutsideClick);

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    });

    return (
        <SC.CartDropdown className="cart-dropdown">
            {cartItems.length ? (
                <SC.CartItemsContainer>
                    {cartItems.map((cartItem) => (
                        <CartItem key={cartItem.id} item={cartItem} />
                    ))}
                </SC.CartItemsContainer>
            ) : (
                <SC.CartEmptyMessage>Your cart is empty</SC.CartEmptyMessage>
            )}
            <CustomButton
                className="cart-checkout-btn"
                onClick={() => {
                    history.push('/checkout');
                    isSideNavOpen && dispatch(closeSideNav());
                }}
                $styleType="cartCheckout"
            >
                GO TO CHECKOUT
            </CustomButton>
        </SC.CartDropdown>
    );
};

export default CartDropdown;
