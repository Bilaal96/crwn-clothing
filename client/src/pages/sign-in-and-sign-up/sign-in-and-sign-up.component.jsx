import React from 'react';

// Components
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

// Styled Components

import './sign-in-and-sign-up.styles.scss';

const SignInAndSignUpPage = () => {
    return (
        <div className="sign-in-and-sign-up">
            <SignIn />
            <SignUp />
        </div>
    );
};

export default SignInAndSignUpPage;
