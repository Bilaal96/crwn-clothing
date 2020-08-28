import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

// Actions
import { toggleCartHidden } from '../../redux/cart/cart.actions';
// Selectors
import { selectCartItems } from '../../redux/cart/cart.selectors';

// Components
import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';

import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems, history, dispatch }) => (
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
            onClick={() => {
                history.push('/checkout');
                dispatch(toggleCartHidden());
            }}
            inverted
        >
            GO TO CHECKOUT
        </CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
