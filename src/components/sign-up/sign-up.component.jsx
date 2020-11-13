import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';

// Actions
import { signUpStart } from '../../redux/user/user.actions';

// Components
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-up.styles.scss';

const SignUp = () => {
    const [userCredentials, setUserCredentials] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    // Handle Form Input Change
    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserCredentials({
            ...userCredentials,
            [name]: value,
        });
    };

    // Handle Sign-up with Email
    const { displayName, email, password, confirmPassword } = userCredentials;

    const dispatch = useDispatch();
    const handleSubmit = useCallback(
        (event) => {
            event.preventDefault();

            // if passwords from user input don't match
            if (password !== confirmPassword) {
                alert('Passwords do not match');
                return;
            }

            dispatch(signUpStart({ displayName, email, password }));
        },
        [dispatch, displayName, email, password, confirmPassword]
    );

    return (
        <div className="sign-up">
            <h2 className="title">Don't have an account?</h2>
            <span className="subtitle">
                Register now with your email & password
            </span>

            <form className="sign-up-form" onSubmit={handleSubmit}>
                <FormInput
                    handleChange={handleChange}
                    label="Display Name"
                    type="text"
                    name="displayName"
                    value={displayName}
                    required
                />
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
                <FormInput
                    handleChange={handleChange}
                    label="Confirm Password"
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    required
                />

                <div className="buttons">
                    <CustomButton type="submit">Register</CustomButton>
                </div>
            </form>
        </div>
    );
};

export default SignUp;
