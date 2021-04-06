import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// Actions
import { checkUserSession } from './redux/user/user.actions';
import { closeSideNav } from './redux/nav/nav.actions';

// Selectors
import { selectCurrentUser } from './redux/user/user.selectors';
import { selectIsSideNavOpen } from './redux/nav/nav.selectors';

// Pages
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
// import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import SignInPage from './pages/sign-in/sign-in.component';
import SignUpPage from './pages/sign-up/sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';

// Components
import Header from './components/header/header.component';

// Utils
import { clearFocusAfterInteraction } from './utils/clear-focus-after-interaction';
import { stopAllAnimationsOnResize } from './utils/stop-animation';

// Styled Components
import PageWrapper from './components/styled/page-wrapper';
import PageOverlay from './components/styled/page-overlay';

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

    // Disable Scroll when isSideNavOpen === true
    useEffect(() => {
        isSideNavOpen
            ? document.body.classList.add('disable-scroll')
            : document.body.classList.remove('disable-scroll');
    }, [isSideNavOpen]);

    const dispatchCloseSideNav = () => dispatch(closeSideNav());

    return (
        <>
            <Header />

            <PageWrapper>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/shop" component={ShopPage} />
                    <Route exact path="/checkout" component={CheckoutPage} />
                    <Route
                        exact
                        path="/sign-in"
                        render={() =>
                            currentUser ? <Redirect to="/" /> : <SignInPage />
                        }
                    />
                    <Route
                        exact
                        path="/sign-up"
                        render={() =>
                            currentUser ? <Redirect to="/" /> : <SignUpPage />
                        }
                    />
                </Switch>
            </PageWrapper>

            {/* Render PageOverlay when Side Nav is OPEN */}
            {isSideNavOpen && <PageOverlay onClick={dispatchCloseSideNav} />}
        </>
    );
};

export default App;
