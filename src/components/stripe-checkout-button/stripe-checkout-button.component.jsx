import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey =
        'pk_test_51HO2fKCEmOuokmWVuRC0fDVJB6sjhhqDHyZgAJ2XhAjn1RQG0MpxpZ2OcZrG0Br9juaz5rqkCIXXpcCjU24vZp5j00HKxhNejg';

    // onToken callback --> triggers on payment submission
    // Submission is handled by StripeCheckout component
    const onToken = (token) => {
        console.log(token);
        alert('Payment Successful!');
    };

    // Stripe pop-up modal for payment handling
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
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;
