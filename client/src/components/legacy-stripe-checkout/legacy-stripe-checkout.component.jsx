import React from 'react';
import { useDispatch } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

import { clearCart } from '../../redux/cart/cart.actions';

import { Button } from '../styled/button';

const LegacyStripeCheckout = ({ price }) => {
    const dispatch = useDispatch();

    // Calc. price in cents - as Stripe handles cents
    const priceForStripe = price * 100;
    const publishableKey =
        'pk_test_51HO2fKCEmOuokmWVuRC0fDVJB6sjhhqDHyZgAJ2XhAjn1RQG0MpxpZ2OcZrG0Br9juaz5rqkCIXXpcCjU24vZp5j00HKxhNejg';

    // onToken callback --> triggers on payment-submission
    // Submission is handled by StripeCheckout component
    const onToken = (token) => {
        // Make Payment Charge to Stripe API
        axios({
            url: 'payment',
            method: 'POST',
            data: {
                token,
                amount: priceForStripe,
            },
        })
            .then((response) => {
                alert('Payment Successful');
                dispatch(clearCart());
            })
            .catch((error) => {
                console.log('Payment error:', error);
                alert(
                    'There was an issue with your payment. Please make sure you use the provided Credit Card details at Checkout.'
                );
            });
    };

    /**
     *  Render disabled Button if price === 0
     * Otherwise, render legacy StripeCheckout component
        - a pop-up modal for payment handling 
    */
    return (
        <>
            {(price === 0 && (
                <Button margin="2rem 0 0" extend disabled>
                    Pay Now
                </Button>
            )) || (
                <StripeCheckout
                    ComponentClass="div"
                    className="stripe-checkout"
                    label="Pay Now"
                    panelLabel="Pay"
                    name="CRWN Clothing Ltd."
                    currency="GBP"
                    billingAddress
                    shippingAddress
                    image="https://svgshare.com/i/CUz.svg"
                    description={`Your total is £${price}`}
                    amount={priceForStripe}
                    token={onToken}
                    stripeKey={publishableKey}
                >
                    <Button
                        className="stripe-checkout-btn"
                        primary="pelorous"
                        margin="2rem 0 0"
                        extend
                    >
                        Pay Now
                    </Button>
                </StripeCheckout>
            )}
        </>
    );
};

export default LegacyStripeCheckout;
