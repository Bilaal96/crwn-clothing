import React from 'react';
import { useHistory } from 'react-router-dom';

// Components
// -- SVG Icons
import { ReactComponent as HoodieSvg } from '../../assets/hoodie.svg';
import { ReactComponent as DressSvg } from '../../assets/dress.svg';
import { ReactComponent as GoogleSvg } from '../../assets/google-logo.svg';
import { ReactComponent as MailSvg } from '../../assets/mail.svg';

// Styled Components
import * as SC from '../styled/auth-aside';
import { ButtonOutlined } from '../styled/button.js';

const SignInAside = () => {
    const history = useHistory();

    return (
        <SC.AuthAside className="sign-in-aside">
            <SC.Heading>
                New to Crown Clothing?
                <SC.SubHeading>
                    Join now by signing in with Google or creating an account!
                </SC.SubHeading>
            </SC.Heading>

            <SC.CtaList>
                <SC.CtaListItem>
                    <SC.ClothesIcon>
                        <DressSvg className="dress" />
                        <HoodieSvg className="hoodie" />
                    </SC.ClothesIcon>

                    <SC.CtaText>
                        <h3>Trendsetters</h3>
                        <p>Stay up to date with the latest trends</p>
                    </SC.CtaText>
                </SC.CtaListItem>

                <SC.CtaListItem>
                    <SC.CtaIcon>
                        <GoogleSvg />
                    </SC.CtaIcon>

                    <SC.CtaText>
                        <h3>Quick & Easy Login</h3>
                        <p>
                            Register & Sign-in with an existing Google account
                        </p>
                    </SC.CtaText>
                </SC.CtaListItem>

                <SC.CtaListItem>
                    <SC.CtaIcon>
                        <MailSvg />
                    </SC.CtaIcon>

                    <SC.CtaText>
                        <h3>Email</h3>
                        <p>
                            Or Register with an email account by clicking the
                            button below
                        </p>
                    </SC.CtaText>
                </SC.CtaListItem>
            </SC.CtaList>

            <ButtonOutlined
                onClick={() => history.push('/sign-up')}
                primary="coral"
                extend
            >
                CREATE AN ACCOUNT
            </ButtonOutlined>
        </SC.AuthAside>
    );
};

export default SignInAside;
