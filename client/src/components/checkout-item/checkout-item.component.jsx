import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

// Actions
import {
    addItem,
    removeItem,
    clearItemFromCart,
} from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

const CheckoutItem = (props) => {
    const { cartItem } = props;
    const { name, quantity, price, imageUrl } = cartItem;

    const dispatch = useDispatch();

    const dispatchAddItem = useCallback(() => {
        dispatch(addItem(cartItem));
    }, [dispatch, cartItem]);

    const dispatchRemoveItem = useCallback(() => {
        dispatch(removeItem(cartItem));
    }, [dispatch, cartItem]);

    const dispatchClearItem = useCallback(() => {
        dispatch(clearItemFromCart(cartItem));
    }, [dispatch, cartItem]);

    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item" />
            </div>

            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={dispatchRemoveItem}>
                    &#10094;
                </div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={dispatchAddItem}>
                    &#10095;
                </div>
            </span>
            <span className="price">${price}</span>

            <div className="remove-button-container">
                <div className="remove-button" onClick={dispatchClearItem}>
                    <span className="remove-icon">&#10005;</span>
                </div>
            </div>
        </div>
    );
};

export default CheckoutItem;
