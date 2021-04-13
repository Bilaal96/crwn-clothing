import React from 'react';
import { useHistory } from 'react-router-dom';

// Components
import CustomButton from '../custom-button/custom-button.component';
// -- SVG Icons
import { ReactComponent as HoodieSvg } from '../../assets/hoodie.svg';
import { ReactComponent as DressSvg } from '../../assets/dress.svg';
import { ReactComponent as GoogleSvg } from '../../assets/google-logo.svg';
import { ReactComponent as MailSvg } from '../../assets/mail.svg';

// Styled Components
import * as SC from './sign-in-aside.styles';

const SignInAside = () => {
    const history = useHistory();

    return (
        <SC.SignInAside>
            <SC.Heading>
                New to CRWN Clothing?
                <SC.SubHeading>
                    Join now by signing in with Google or creating an account!
                </SC.SubHeading>
            </SC.Heading>

            <SC.CtaList>
                <SC.CtaListItem>
                    <SC.TrendsettersIcon>
                        <DressSvg className="dress" />
                        <HoodieSvg className="hoodie" />
                    </SC.TrendsettersIcon>

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
                            Or Register & Sign-in with an email account by
                            clicking the button below
                        </p>
                    </SC.CtaText>
                </SC.CtaListItem>
            </SC.CtaList>

            <CustomButton onClick={() => history.push('/sign-up')}>
                CREATE AN ACCOUNT
            </CustomButton>
        </SC.SignInAside>
    );
};

export default SignInAside;
