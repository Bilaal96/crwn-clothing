import React from 'react';
import { useSelector } from 'react-redux';

// Selectors
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { selectCartTotal } from '../../redux/cart/cart.selectors';

// Components
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-checkout-button/stripe-checkout-button.component';

import './checkout.styles.scss';

const CheckoutPage = () => {
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);

    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span className="header-title">Product</span>
                </div>
                <div className="header-block">
                    <span className="header-title">Description</span>
                </div>
                <div className="header-block">
                    <span className="header-title">Quantity</span>
                </div>
                <div className="header-block">
                    <span className="header-title">Price</span>
                </div>
                <div className="header-block">
                    <span className="header-title">Remove</span>
                </div>
            </div>

            {cartItems.length ? (
                cartItems.map((cartItem) => (
                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                ))
            ) : (
                <div className="checkout-empty">
                    There are no items in your cart
                </div>
            )}

            <div className="total">
                <span>TOTAL: ${cartTotal}</span>
            </div>

            <div className="test-warning">
                *Please use the following test credit card for payments*
                <br />
                Card No.: 4242 4242 4242 4242
                <br />
                Exp. Date: 01/30
                <br />
                CVC: 123
            </div>

            <StripeCheckoutButton price={cartTotal} />
        </div>
    );
};

export default CheckoutPage;
