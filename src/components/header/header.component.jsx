import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// Actions
import { toggleCartHidden } from '../../redux/cart/cart.actions';
// Selectors
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

// Components
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

// Firebase Utils
import { auth } from '../../firebase/firebase.utils';

import './header.styles.scss';

const Header = ({ currentUser, hidden, dispatch }) => (
    <div className="header">
        <NavLink className="logo-container" to="/">
            <Logo className="logo" title="logo" />
        </NavLink>

        <div className="options">
            <NavLink exact className="option" activeClassName="selected" to="/">
                HOME
            </NavLink>
            <NavLink className="option" activeClassName="selected" to="/shop">
                SHOP
            </NavLink>
            <NavLink
                className="option"
                activeClassName="selected"
                to="/contact"
            >
                CONTACT
            </NavLink>

            {currentUser ? (
                <div
                    className="option sign-out-link"
                    onClick={() => {
                        auth.signOut();
                        if (hidden === false) {
                            dispatch(toggleCartHidden());
                        }
                    }}
                >
                    SIGN OUT
                </div>
            ) : (
                <NavLink
                    className="option sign-in-link"
                    activeClassName="selected"
                    to="/signin"
                >
                    SIGN IN
                </NavLink>
            )}

            <CartIcon />
        </div>
        {hidden ? null : <CartDropdown />}
    </div>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
