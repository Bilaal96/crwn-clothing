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
    ContentGrid,
    ContentGridItem,
    ContentBox,
} from '../../components/styled/content-grid';

const CheckoutPage = () => {
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);

    return (
        <section className="checkout-page">
            <PageHeading>Checkout</PageHeading>
            <ContentGrid>
                <ContentGridItem colStart="1" colEnd="9">
                    <ContentBox>
                        <CheckoutSummary
                            cartItems={cartItems}
                            cartTotal={cartTotal}
                        />
                    </ContentBox>
                </ContentGridItem>
                <ContentGridItem colStart="9" colEnd="-1">
                    <ContentBox maxContent>
                        <CheckoutAside cartTotal={cartTotal} />
                    </ContentBox>
                </ContentGridItem>
            </ContentGrid>
        </section>
    );
};

export default CheckoutPage;
