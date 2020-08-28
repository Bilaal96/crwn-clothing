import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// Actions
import { toggleCartHidden } from '../../redux/cart/cart.actions';
// Selectors
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

// Components
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = ({ itemCount, toggleCartHidden }) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">{itemCount}</span>
    </div>
);

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
