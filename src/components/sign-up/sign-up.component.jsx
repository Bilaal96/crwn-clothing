import React, { useState } from 'react';
import { connect } from 'react-redux';

// Actions
import { signUpStart } from '../../redux/user/user.actions';

// Components
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-up.styles.scss';

const SignUp = ({ signUpStart }) => {
    const [userCredentials, setUserCredentials] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const { displayName, email, password, confirmPassword } = userCredentials;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserCredentials({
            ...userCredentials,
            [name]: value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // if passwords from user input don't match
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        signUpStart({ displayName, email, password });
    };

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

const mapDispatchToProps = (dispatch) => ({
    signUpStart: (newUserCredentials) =>
        dispatch(signUpStart(newUserCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
