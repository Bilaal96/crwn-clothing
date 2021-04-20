import React from 'react';

// Components
import LegacyStripeCheckout from '../../components/legacy-stripe-checkout/legacy-stripe-checkout.component';

// Styled Components
import * as SC from './checkout-aside.styles';

const CheckoutAside = ({ cartTotal }) => {
    return (
        <>
            <SC.StripeTestWarning>
                <SC.WarningHeader>
                    <div className="info-icon-container">
                        <SC.InfoIcon />
                    </div>
                    <p>
                        Please use the following TEST credit card details for
                        payments
                    </p>
                </SC.WarningHeader>

                <SC.TestCardDetails>
                    <li>
                        <span className="detail">Card No.:</span>
                        <span className="value">4242 4242 4242 4242</span>
                    </li>
                    <li>
                        <span className="detail">Exp. Date:</span>
                        <span className="value">
                            <em>
                                Any future date in the MM/YY format (e.g. 01/30)
                            </em>
                        </span>
                    </li>

                    <li>
                        <span className="detail">CVC:</span>
                        <span className="value">123</span>
                    </li>
                </SC.TestCardDetails>
            </SC.StripeTestWarning>

            <SC.TotalPrice>
                <span className="label">TOTAL:</span>{' '}
                <span className="value">${cartTotal}</span>
            </SC.TotalPrice>

            {/* Stripe Payment Button */}
            <LegacyStripeCheckout price={cartTotal} />
        </>
    );
};

export default CheckoutAside;
