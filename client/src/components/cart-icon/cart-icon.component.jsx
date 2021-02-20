import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

// Actions
import { toggleCartHidden } from '../../redux/cart/cart.actions';

// Selectors
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

// Styled Components
import * as SC from './cart-icon.styles';

// Child of CartDropdownSwitch
const CartIcon = ({ isCartHidden }) => {
    const itemCount = useSelector(selectCartItemsCount);
    const location = useLocation();
    const dispatch = useDispatch();

    const dispatchToggleCartHidden = (e) => {
        if (e.type === 'click' || (e.type === 'keyup' && e.keyCode === 13)) {
            dispatch(toggleCartHidden());
        }
    };

    return (
        <SC.CartDropdownSwitch
            tabIndex="0"
            onKeyUp={dispatchToggleCartHidden}
            onClick={dispatchToggleCartHidden}
        >
            <SC.CartIcon
                $isCartHidden={isCartHidden}
                $currentPath={location.pathname}
            />
            <SC.CartItemsCount>{itemCount}</SC.CartItemsCount>
        </SC.CartDropdownSwitch>
    );
};

export default CartIcon;
