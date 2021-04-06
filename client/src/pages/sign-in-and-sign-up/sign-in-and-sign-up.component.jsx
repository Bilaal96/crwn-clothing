import React from 'react';

// Components
import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

// Styled Components

import './sign-in-and-sign-up.styles.scss';

const SignInAndSignUpPage = () => {
    return (
        <div className="sign-in-and-sign-up">
            <SignInForm />
            <SignUpForm />
        </div>
    );
};

export default SignInAndSignUpPage;
