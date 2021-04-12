import React from 'react';
import { useSelector } from 'react-redux';

// Selectors
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { selectCartTotal } from '../../redux/cart/cart.selectors';

// Components
import CheckoutSummary from '../../components/checkout-summary/checkout-summary.component';
import CheckoutAside from '../../components/checkout-aside/checkout-aside.component';

// Styled Components
import PageHeading from '../../components/styled/page-heading';
import {
    ContentBoxContainer,
    ContentBox,
    MainContentBox,
} from '../../components/styled/content-box';

const CheckoutPage = () => {
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);

    return (
        <section className="checkout-page">
            <PageHeading>Checkout</PageHeading>
            <ContentBoxContainer>
                <MainContentBox>
                    <CheckoutSummary
                        cartItems={cartItems}
                        cartTotal={cartTotal}
                    />
                </MainContentBox>
                <ContentBox>
                    <CheckoutAside cartTotal={cartTotal} />
                </ContentBox>
            </ContentBoxContainer>
        </section>
    );
};

export default CheckoutPage;
