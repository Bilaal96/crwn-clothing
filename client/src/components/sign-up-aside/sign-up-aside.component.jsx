import React from 'react';

// Components
// -- SVG Icons
import { ReactComponent as DeliverySvg } from '../../assets/delivery.svg';
import { ReactComponent as TrenchCoatSvg } from '../../assets/womens-trench-coat.svg';
import { ReactComponent as PufferJacketSvg } from '../../assets/puffer-jacket.svg';
import { ReactComponent as HistorySvg } from '../../assets/order-history.svg';
import { ReactComponent as OffersSvg } from '../../assets/offers.svg';

// Styled Components
import * as SC from '../styled/auth-aside';

const SignUpAside = () => {
    return (
        <SC.AuthAside className="sign-up-aside">
            <SC.Heading>
                Member Benefits
                <SC.SubHeading>
                    By joining us today, you instantly benefit from:
                </SC.SubHeading>
            </SC.Heading>

            <SC.CtaList>
                <SC.CtaListItem>
                    <SC.ClothesIcon>
                        <TrenchCoatSvg className="trench-coat" />
                        <PufferJacketSvg className="puffer-jacket" />
                    </SC.ClothesIcon>

                    <SC.CtaText>
                        <h3>Limited Edition Products</h3>
                        <p>Earn instant access to limited edition products</p>
                    </SC.CtaText>
                </SC.CtaListItem>

                <SC.CtaListItem>
                    <SC.CtaIcon>
                        <OffersSvg />
                    </SC.CtaIcon>

                    <SC.CtaText>
                        <h3>Promotional Offers</h3>
                        <p>Receive our best special offers and promotions</p>
                    </SC.CtaText>
                </SC.CtaListItem>

                <SC.CtaListItem>
                    <SC.CtaIcon>
                        <DeliverySvg />
                    </SC.CtaIcon>

                    <SC.CtaText>
                        <h3>Delivery Perks</h3>
                        <p>Free standard delivery when you spend £20 or more</p>
                    </SC.CtaText>
                </SC.CtaListItem>

                <SC.CtaListItem>
                    <SC.CtaIcon>
                        <HistorySvg />
                    </SC.CtaIcon>

                    <SC.CtaText>
                        <h3>Digital Receipts</h3>
                        <p>Access your order history any time & anywhere</p>
                    </SC.CtaText>
                </SC.CtaListItem>
            </SC.CtaList>
        </SC.AuthAside>
    );
};

export default SignUpAside;
