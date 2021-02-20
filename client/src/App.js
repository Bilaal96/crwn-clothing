import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// Actions
import { checkUserSession } from './redux/user/user.actions';

// Selectors
import { selectCurrentUser } from './redux/user/user.selectors';
import { selectIsSideNavOpen } from './redux/nav/nav.selectors';

// Pages
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';

// Components
import Header from './components/header/header.component';

// Utils
import { clearFocusAfterInteraction } from './utils/clear-focus-after-interaction';
import { stopAllAnimationsOnResize } from './utils/stop-animation';

// Styled Components
import * as SC from './App.styles';

const App = () => {
    const currentUser = useSelector(selectCurrentUser);
    const isSideNavOpen = useSelector(selectIsSideNavOpen);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(checkUserSession());
    }, [dispatch]);

    // Event Listeners
    useEffect(() => {
        // Clear HTML element focus on click & keyup
        const clearFocusEventListeners = clearFocusAfterInteraction();

        // Prevent animations on browser resize
        const removeResizeEventListener = stopAllAnimationsOnResize();

        return () => {
            clearFocusEventListeners();
            removeResizeEventListener();
        };
    }, []);

    return (
        <>
            <Header />

            <SC.PageWrapper>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/shop" component={ShopPage} />
                    <Route exact path="/checkout" component={CheckoutPage} />
                    <Route
                        exact
                        path="/signin"
                        render={() =>
                            currentUser ? (
                                <Redirect to="/" />
                            ) : (
                                <SignInAndSignUpPage />
                            )
                        }
                    />
                </Switch>
            </SC.PageWrapper>

            {/* Render PageOverlay when Side Nav is OPEN */}
            {isSideNavOpen && <SC.PageOverlay />}
        </>
    );
};

export default App;
