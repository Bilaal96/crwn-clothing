import React from 'react';

// Components
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

// Firebase Utils
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        };
    }

    handleChange = (event) => {
        const { name, value } = event.target;

        this.setState({
            [name]: value,
        });
    };

    handleSubmit = async (event) => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);

            this.setState({
                email: '',
                password: '',
            });
        } catch (error) {
            console.error(error);
        }
    };

    render() {
        return (
            <div className="sign-in">
                <h2 className="title">I already have an account</h2>
                <span className="subtitle">
                    Sign in with your email & password
                </span>

                <form onSubmit={this.handleSubmit} className="sign-in-form">
                    <FormInput
                        handleChange={this.handleChange}
                        label="Email"
                        type="email"
                        name="email"
                        value={this.state.email}
                        required
                    />
                    <FormInput
                        handleChange={this.handleChange}
                        label="Password"
                        type="password"
                        name="password"
                        value={this.state.password}
                        required
                    />
                    <div className="buttons">
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton
                            type="button"
                            onClick={signInWithGoogle}
                            isGoogleSignIn
                        >
                            Sign In With Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;
