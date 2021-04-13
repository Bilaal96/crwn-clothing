import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// Selectors
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

// Components
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import CustomButton from '../custom-button/custom-button.component';

// Styled Components
import * as SC from './checkout-summary.styles';

const CheckoutSummary = ({ cartItems, cartTotal }) => {
    const cartItemsCount = useSelector(selectCartItemsCount);
    const history = useHistory();

    return (
        <SC.CheckoutSummary>
            <SC.SummaryHeader>
                <div className="summary-item-count">
                    <span>No. of Items in cart: </span>
                    {cartItemsCount}
                </div>

                <div className="summary-total">
                    <span>Total: </span>${cartTotal}
                </div>
            </SC.SummaryHeader>

            {cartItems.length ? (
                cartItems.map((cartItem) => (
                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                ))
            ) : (
                <SC.EmptyCheckout>
                    <p>Your cart is empty</p>
                    <CustomButton
                        onClick={() => history.push('/shop')}
                        $styleType="inverted"
                    >
                        Visit Shop
                    </CustomButton>
                </SC.EmptyCheckout>
            )}
        </SC.CheckoutSummary>
    );
};

export default CheckoutSummary;
