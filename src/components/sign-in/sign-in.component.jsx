import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';

// Actions
import {
    googleSignInStart,
    emailSignInStart,
} from '../../redux/user/user.actions';

// Components
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-in.styles.scss';

const SignIn = () => {
    // Set Sign-in Form Input Values
    const [userCredentials, setUserCredentials] = useState({
        email: '',
        password: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setUserCredentials({
            ...userCredentials, // spread previous state
            [name]: value, // update property that changed
        });
    };

    // Dispatching Sign-in Actions
    const dispatch = useDispatch();

    // Handle Sign-in with Email on Form Submission
    const handleSubmit = useCallback(
        (event) => {
            console.log('handling email sign in');
            event.preventDefault();

            dispatch(emailSignInStart(userCredentials));
        },
        [dispatch, userCredentials]
    );

    // Handle Google Sign-in Button Click
    const dispatchGoogleSignInStart = useCallback(() => {
        dispatch(googleSignInStart());
    }, [dispatch]);

    const { email, password } = userCredentials;

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
                        onClick={dispatchGoogleSignInStart}
                        isGoogleSignIn
                    >
                        Sign In With Google
                    </CustomButton>
                </div>
            </form>
        </div>
    );
};

export default SignIn;
