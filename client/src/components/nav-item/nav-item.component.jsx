import React from 'react';

// Styled Components
import * as SC from '../nav-item/nav-item.styles';

// Renders a Styled NavLink (from React Router)
const NavItem = ({ children, ...otherProps }) => {
    return (
        <SC.CustomNavLink activeClassName="selected" {...otherProps}>
            {children}
        </SC.CustomNavLink>
    );
};

export default NavItem;
