import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';

// Actions
import {
    emailSignInStart,
    googleSignInStart,
} from '../../redux/user/user.actions';

// Components
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import Divider from '../divider/divider.component';

// Styled Components
import * as SC from '../styled/auth-form';

const SignInForm = () => {
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
        <>
            <SC.AuthFormTitle>Already have an account?</SC.AuthFormTitle>
            <SC.AuthFormWrapper>
                <form onSubmit={handleSubmit} className="sign-in-form">
                    <fieldset>
                        <legend>Sign in with your email & password</legend>

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
                        <div className="btns-container">
                            <CustomButton type="submit">Sign In</CustomButton>

                            <Divider
                                content="OR"
                                lineHeight="0.4rem"
                                spacingY="4rem"
                            />

                            <CustomButton
                                type="button"
                                onClick={dispatchGoogleSignInStart}
                                $styleType="googleSignIn"
                            >
                                Sign In With Google
                            </CustomButton>
                        </div>
                    </fieldset>
                </form>
            </SC.AuthFormWrapper>
        </>
    );
};

export default SignInForm;
