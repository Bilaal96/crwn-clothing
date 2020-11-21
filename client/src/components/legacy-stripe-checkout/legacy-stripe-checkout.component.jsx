import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const LegacyStripeCheckout = ({ price }) => {
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
            })
            .catch((error) => {
                console.log('Payment error:', error);
                alert(
                    'There was an issue with your payment. Please make sure you use the provided Credit Card details at Checkout.'
                );
            });
    };

    // Legacy Stripe pop-up modal for payment handling
    return (
        <StripeCheckout
            className="stripe-checkout"
            label="Pay Now"
            name="CRWN Clothing Ltd."
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            token={onToken}
            stripeKey={publishableKey}
        >
            {/* Render button with custom styles */}
            <button className="custom-pay-btn">Pay Now</button>
        </StripeCheckout>
    );
};

export default LegacyStripeCheckout;
