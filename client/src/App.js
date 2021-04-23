import React, { useEffect, lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// Actions
import { checkUserSession } from './redux/user/user.actions';
import { closeSideNav } from './redux/nav/nav.actions';

// Selectors
import { selectCurrentUser } from './redux/user/user.selectors';
import { selectIsSideNavOpen } from './redux/nav/nav.selectors';

// Utils
import { clearFocusAfterInteraction } from './utils/clear-focus-after-interaction';
import { stopAllAnimationsOnResize } from './utils/stop-animation';

// Components
import Header from './components/header/header.component';
import Spinner from './components/spinner/spinner.component';

// Styled Components
import PageWrapper from './components/styled/page-wrapper';
import PageOverlay from './components/styled/page-overlay';

// Pages --> Lazy Loaded
const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const SignInPage = lazy(() => import('./pages/sign-in/sign-in.component'));
const SignUpPage = lazy(() => import('./pages/sign-up/sign-up.component'));
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));

const App = () => {
    const currentUser = useSelector(selectCurrentUser);
    const isSideNavOpen = useSelector(selectIsSideNavOpen);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(checkUserSession());
    }, [dispatch]);

    // Event Listeners
    useEffect(() => {
        // Clear HTML element focus on click, keyup & drag
        const removeFocusEventListeners = clearFocusAfterInteraction();

        // Prevent animations on browser resize
        const removeResizeEventListener = stopAllAnimationsOnResize();

        return () => {
            removeFocusEventListeners();
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
                    <Suspense fallback={<Spinner />}>
                        <Route exact path="/" component={HomePage} />
                        <Route path="/shop" component={ShopPage} />
                        <Route
                            exact
                            path="/checkout"
                            component={CheckoutPage}
                        />
                        <Route
                            exact
                            path="/sign-in"
                            render={() =>
                                currentUser ? (
                                    <Redirect to="/" />
                                ) : (
                                    <SignInPage />
                                )
                            }
                        />
                        <Route
                            exact
                            path="/sign-up"
                            render={() =>
                                currentUser ? (
                                    <Redirect to="/" />
                                ) : (
                                    <SignUpPage />
                                )
                            }
                        />
                    </Suspense>
                </Switch>
            </PageWrapper>

            {/* Render PageOverlay when Side Nav is OPEN */}
            {isSideNavOpen && <PageOverlay onClick={dispatchCloseSideNav} />}
        </>
    );
};

export default App;
