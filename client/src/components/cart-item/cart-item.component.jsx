import React from 'react';

// Styled Components
import * as SC from './cart-item.styles';

const CartItem = ({ item: { imageUrl, name, price, quantity } }) => (
    <SC.CartItem className="cart-item">
        <SC.ItemImage src={imageUrl} alt="item" />
        <SC.ItemDetails className="item-details">
            <SC.ItemName className="name">{name}</SC.ItemName>
            <SC.ItemPrice className="price">
                {quantity} x ${price}
            </SC.ItemPrice>
        </SC.ItemDetails>
    </SC.CartItem>
);

export default CartItem;
