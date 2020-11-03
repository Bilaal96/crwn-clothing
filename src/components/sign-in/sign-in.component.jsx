import React, { useState } from 'react';
import { connect } from 'react-redux';

// Actions
import {
    googleSignInStart,
    emailSignInStart,
} from '../../redux/user/user.actions';

// Components
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-in.styles.scss';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
    const [userCredentials, setUserCredentials] = useState({
        email: '',
        password: '',
    });

    const { email, password } = userCredentials;

    const handleChange = (event) => {
        const { name, value } = event.target;

        setUserCredentials({
            ...userCredentials, // spread previous state
            [name]: value, // update property that changed
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        emailSignInStart(email, password);
    };

    return (
        <div className="sign-in">
            <h2 className="title">I already have an account</h2>
            <span className="subtitle">Sign in with your email & password</span>

            <form onSubmit={handleSubmit} className="sign-in-form">
                <FormInput
                    handleChange={handleChange}
                    label="Email"
                    type="email"
                    name="email"
                    value={email}
                    required
                />
                <FormInput
                    handleChange={handleChange}
                    label="Password"
                    type="password"
                    name="password"
                    value={password}
                    required
                />
                <div className="buttons">
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton
                        type="button"
                        onClick={googleSignInStart}
                        isGoogleSignIn
                    >
                        Sign In With Google
                    </CustomButton>
                </div>
            </form>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) =>
        dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
