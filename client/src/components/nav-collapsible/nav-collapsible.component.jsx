import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// Actions
import { signOutStart } from '../../redux/user/user.actions';
import { closeSideNav } from '../../redux/nav/nav.actions';

// Selectors
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectIsSideNavOpen } from '../../redux/nav/nav.selectors';

// Components
import * as SC from './nav-collapsible.styles';
import NavItem from '../nav-item/nav-item.component';

// Navigation Menu
// -- Top bar, collapses to Side Nav on Mobile/Tablet
const NavCollapsible = () => {
    // Hooks
    // -- Retrieve State
    const currentUser = useSelector(selectCurrentUser);
    const isSideNavOpen = useSelector(selectIsSideNavOpen);

    const dispatch = useDispatch();

    // -- react-router's history fn
    const history = useHistory();

    // Action Dispatchers
    // -- only dispatch action to close side-nav
    //    if side-nav is open
    const dispatchCloseSideNav = () =>
        isSideNavOpen && dispatch(closeSideNav());

    /** --
     * init sign-out process
     * on succesful sign-out, history is used to 
       redirect to /signin route (see user.sagas.js)
     */
    const dispatchSignOut = (e) => dispatch(signOutStart(history));
    return (
        <>
            <SC.NavContainer isOpen={isSideNavOpen}>
                {/* Renders React Router's NavLink with custom styles */}
                <NavItem exact to="/" onClick={dispatchCloseSideNav}>
                    HOME
                </NavItem>
                <NavItem to="/shop" onClick={dispatchCloseSideNav}>
                    SHOP
                </NavItem>
                <NavItem to="/contact" onClick={dispatchCloseSideNav}>
                    CONTACT
                </NavItem>

                {currentUser ? (
                    <NavItem
                        as="a" // render NavLink as anchor tag
                        onClick={() => {
                            dispatchSignOut();
                            dispatchCloseSideNav();
                        }}
                        $signOut
                    >
                        SIGN OUT
                    </NavItem>
                ) : (
                    <NavItem
                        to="/signin"
                        onClick={dispatchCloseSideNav}
                        $signIn
                    >
                        SIGN IN
                    </NavItem>
                )}
            </SC.NavContainer>
        </>
    );
};

export default NavCollapsible;
