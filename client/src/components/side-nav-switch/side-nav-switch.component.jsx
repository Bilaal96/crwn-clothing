import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Actions
import { toggleSideNav } from '../../redux/nav/nav.actions';

// Selectors
import { selectIsSideNavOpen } from '../../redux/nav/nav.selectors';

// Styled Components
import * as SC from './side-nav-switch.styles';

const SideNavSwitch = () => {
    const isSideNavOpen = useSelector(selectIsSideNavOpen);
    const dispatch = useDispatch();

    const dispatchToggleSideNav = () => dispatch(toggleSideNav());

    return (
        <SC.SideNavSwitch
            $isOpen={isSideNavOpen}
            onClick={dispatchToggleSideNav}
            aria-label="Navigation Toggle"
        >
            <SC.BurgerIcon $isOpen={isSideNavOpen}>
                <div className="middle-line" />
            </SC.BurgerIcon>
        </SC.SideNavSwitch>
    );
};

export default SideNavSwitch;
