import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: null,
        };
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
        // authenticate user on signin
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
            // if user exists, i.e. userAuth is not null
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot((snapshot) => {
                    this.setState(
                        {
                            currentUser: {
                                id: snapshot.id,
                                ...snapshot.data(),
                            },
                        },
                        () => console.log(this.state)
                    );
                });
            }

            // if userAuth is NULL
            this.setState({ currentUser: userAuth });
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Header currentUser={this.state.currentUser} />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/shop" component={ShopPage} />
                    <Route
                        exact
                        path="/signin"
                        component={SignInAndSignUpPage}
                    />
                </Switch>
            </div>
        );
    }
}

export default App;
