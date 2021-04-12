import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

// Actions
import {
    addItem,
    removeItem,
    clearItemFromCart,
} from '../../redux/cart/cart.actions';

// Styled Components
import * as SC from './checkout-item.styles';

const CheckoutItem = (props) => {
    const { cartItem } = props;
    const { name, quantity, price, imageUrl } = cartItem;
    const subTotal = quantity * price;

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
        <SC.CheckoutItem>
            <SC.RemoveButtonContainer>
                <SC.RemoveButton onClick={dispatchClearItem}>
                    <SC.RemoveIcon>&#10005;</SC.RemoveIcon>
                </SC.RemoveButton>
            </SC.RemoveButtonContainer>

            <SC.ImageContainer>
                <img src={imageUrl} alt="item" />
            </SC.ImageContainer>

            <SC.ProductDetails>
                <SC.Name>
                    <SC.Label>Product:</SC.Label>
                    <SC.Value>{name}</SC.Value>
                </SC.Name>

                <SC.SingleItemPrice className="price">
                    <SC.Label>
                        Price: <br />
                        <span className="sub-label">(single item)</span>
                    </SC.Label>
                    <SC.Value>${price}</SC.Value>
                </SC.SingleItemPrice>

                <SC.Quantity>
                    <SC.Label>Quantity:</SC.Label>
                    <SC.Value>
                        <span
                            className="arrow arrow-left"
                            onClick={dispatchRemoveItem}
                        >
                            &#10094;
                        </span>
                        <span className="item-count">{quantity}</span>
                        <span
                            className="arrow arrow-right"
                            onClick={dispatchAddItem}
                        >
                            &#10095;
                        </span>
                    </SC.Value>
                </SC.Quantity>

                <SC.SubTotal>
                    <SC.Label>Subtotal: </SC.Label>
                    <SC.Value>${subTotal}</SC.Value>
                </SC.SubTotal>
            </SC.ProductDetails>
        </SC.CheckoutItem>
    );
};

export default CheckoutItem;
