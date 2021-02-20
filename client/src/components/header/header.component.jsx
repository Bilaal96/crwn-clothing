import React from 'react';

// Components
import SideNavSwitch from '../side-nav-switch/side-nav-switch.component';
import NavCollapsible from '../nav-collapsible/nav-collapsible.component';
import Cart from '../cart/cart.component';

// Styled Components
import * as SC from './header.styles';

const Header = () => {
    return (
        <SC.Header>
            <SC.LogoLink>
                <SC.Logo />
            </SC.LogoLink>

            <SideNavSwitch />
            <NavCollapsible />

            <Cart />
        </SC.Header>
    );
};

export default Header;
