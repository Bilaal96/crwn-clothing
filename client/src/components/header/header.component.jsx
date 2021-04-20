import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Actions
import { closeSideNav } from '../../redux/nav/nav.actions';

// Selectors
import { selectIsSideNavOpen } from '../../redux/nav/nav.selectors';

// Components
import SideNavSwitch from '../side-nav-switch/side-nav-switch.component';
import NavCollapsible from '../nav-collapsible/nav-collapsible.component';
import Cart from '../cart/cart.component';

// Styled Components
import * as SC from './header.styles';

const Header = () => {
    const isSideNavOpen = useSelector(selectIsSideNavOpen);
    const dispatch = useDispatch();

    return (
        <SC.Header>
            <SC.LogoLink
                to="/"
                onClick={() => {
                    isSideNavOpen && dispatch(closeSideNav());
                }}
            >
                <SC.Logo />
            </SC.LogoLink>

            <SideNavSwitch />
            <NavCollapsible />

            <Cart />
        </SC.Header>
    );
};

export default Header;
