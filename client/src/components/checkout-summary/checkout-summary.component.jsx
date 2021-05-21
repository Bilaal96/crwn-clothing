import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// Selectors
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

// Components
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

// Styled Components
import * as SC from './checkout-summary.styles';
import { ButtonOutlined } from '../styled/button';

const CheckoutSummary = ({ cartItems, cartTotal }) => {
    const cartItemsCount = useSelector(selectCartItemsCount);
    const history = useHistory();

    return (
        <SC.CheckoutSummary>
            <SC.SummaryHeader>
                <div className="checkout-item-count">
                    <span className="label">Items in cart: </span>
                    <span className="value">{cartItemsCount}</span>
                </div>

                <div className="checkout-total">
                    <span className="label">Total: </span>
                    <span className="value">£{cartTotal}</span>
                </div>
            </SC.SummaryHeader>

            {cartItems.length ? (
                cartItems.map((cartItem) => (
                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                ))
            ) : (
                <SC.EmptyCheckout>
                    <p>Your cart is empty</p>
                    <ButtonOutlined
                        onClick={() => history.push('/shop')}
                        extend
                    >
                        Visit Shop
                    </ButtonOutlined>
                </SC.EmptyCheckout>
            )}
        </SC.CheckoutSummary>
    );
};

export default CheckoutSummary;
