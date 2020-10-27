import React from 'react';
import { connect } from 'react-redux';

// Actions
import { signUpStart } from '../../redux/user/user.actions';

// Components
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

// Firebase Utils
// -- Imported because we're creating & authenticating new users
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.scss';

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
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

        const { displayName, email, password, confirmPassword } = this.state;

        // if passwords from user input don't match
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        const { signUpStart } = this.props;
        signUpStart({ displayName, email, password });

        // try {
        //     const { user } = await auth.createUserWithEmailAndPassword(
        //         email,
        //         password
        //     );

        //     await createUserProfileDocument(user, { displayName });

        //     this.setState({
        //         displayName: '',
        //         email: '',
        //         password: '',
        //         confirmPassword: '',
        //     });
        // } catch (error) {
        //     console.error(error);
        // }
    };

    render() {
        const { displayName, email, password, confirmPassword } = this.state;

        return (
            <div className="sign-up">
                <h2 className="title">Don't have an account?</h2>
                <span className="subtitle">
                    Register now with your email & password
                </span>

                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                        handleChange={this.handleChange}
                        label="Display Name"
                        type="text"
                        name="displayName"
                        value={displayName}
                        required
                    />
                    <FormInput
                        handleChange={this.handleChange}
                        label="Email"
                        type="email"
                        name="email"
                        value={email}
                        required
                    />
                    <FormInput
                        handleChange={this.handleChange}
                        label="Password"
                        type="password"
                        name="password"
                        value={password}
                        required
                    />
                    <FormInput
                        handleChange={this.handleChange}
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
    }
}

const mapDispatchToProps = (dispatch) => ({
    signUpStart: (newUserCredentials) =>
        dispatch(signUpStart(newUserCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
