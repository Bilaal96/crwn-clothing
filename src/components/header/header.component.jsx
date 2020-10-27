import React from 'react';
// import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// Actions
import { toggleCartHidden } from '../../redux/cart/cart.actions';
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

const Header = ({ currentUser, hidden, toggleCartHidden, signOutStart }) => (
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
                    onClick={() => {
                        signOutStart();
                        if (hidden === false) {
                            toggleCartHidden();
                        }
                    }}
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
        {hidden ? null : <CartDropdown />}
    </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden()),
    signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
