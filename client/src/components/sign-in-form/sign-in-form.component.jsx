import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';

// Actions
import {
    emailSignInStart,
    googleSignInStart,
} from '../../redux/user/user.actions';

// Components
import FormInput from '../form-input/form-input.component';
import Divider from '../divider/divider.component';

// Styled Components
import * as SC from '../styled/form';
import { Button } from '../styled/button';

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
            <SC.FormTitle>Already have an account?</SC.FormTitle>
            <SC.FormWrapper>
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
                        <div className="buttons-container">
                            <Button type="submit" primary="greenHaze" extend>
                                Sign In
                            </Button>

                            <Divider
                                content="OR"
                                lineHeight="0.4rem"
                                spacingY="4rem"
                            />

                            <Button
                                onClick={dispatchGoogleSignInStart}
                                primary="pelorous"
                                extend
                            >
                                Sign In With Google
                            </Button>
                        </div>
                    </fieldset>
                </form>
            </SC.FormWrapper>
        </>
    );
};

export default SignInForm;
