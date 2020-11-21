import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// Actions
import { signOutStart } from '../../redux/user/user.actions';

// Selectors
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

// Components
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

// Styled Components
import {
    HeaderContainer,
    LogoContainer,
    OptionsContainer,
    OptionLink,
} from './header.styles';

// import './header.styles.scss';

const Header = () => {
    const currentUser = useSelector(selectCurrentUser);
    const isCartHidden = useSelector(selectCartHidden);

    const dispatch = useDispatch();
    const history = useHistory();

    // Memoize signOutStart() with useCallback() => as it's dispatched as inline-callback
    const signOut = useCallback(() => {
        // history is passed to signOut() Saga
        // After signOutSuccess() dispatches, history is used in signOut() Saga to redirect user to /signin
        dispatch(signOutStart(history));
    }, [dispatch, history]);

    return (
        <HeaderContainer>
            <LogoContainer className="logo-container" to="/">
                <Logo className="logo" title="logo" />
            </LogoContainer>

            <OptionsContainer>
                {/* OptionLink rendered as NavLink by Default */}
                <OptionLink
                    exact
                    className="option"
                    activeClassName="selected"
                    to="/"
                >
                    HOME
                </OptionLink>
                <OptionLink
                    className="option"
                    activeClassName="selected"
                    to="/shop"
                >
                    SHOP
                </OptionLink>
                <OptionLink
                    className="option"
                    activeClassName="selected"
                    to="/contact"
                >
                    CONTACT
                </OptionLink>

                {currentUser ? (
                    <OptionLink
                        className="option sign-out-link"
                        as="div" // render OptionLink as div
                        onClick={signOut}
                    >
                        SIGN OUT
                    </OptionLink>
                ) : (
                    <OptionLink
                        className="option sign-in-link"
                        activeClassName="selected"
                        to="/signin"
                    >
                        SIGN IN
                    </OptionLink>
                )}

                <CartIcon />
            </OptionsContainer>
            {isCartHidden ? null : <CartDropdown />}
        </HeaderContainer>
    );
};

export default Header;
