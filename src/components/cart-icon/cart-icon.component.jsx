import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Actions
import { toggleCartHidden } from '../../redux/cart/cart.actions';
// Selectors
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

// Components
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = () => {
    // Get the total number of cart items via Cart selector
    const itemCount = useSelector(selectCartItemsCount);

    const dispatch = useDispatch();
    const dispatchToggleCartHidden = useCallback(() => {
        dispatch(toggleCartHidden());
    }, [dispatch]);

    return (
        <div className="cart-icon" onClick={dispatchToggleCartHidden}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">{itemCount}</span>
        </div>
    );
};

export default CartIcon;
