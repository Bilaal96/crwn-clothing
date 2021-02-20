import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

// Selectors
import { selectCartHidden } from '../../redux/cart/cart.selectors';

// Components
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

// Styled Components
const SC = {};
SC.Cart = styled.div`
    position: relative;
`;

const Cart = () => {
    const isCartHidden = useSelector(selectCartHidden);

    return (
        <SC.Cart>
            <CartIcon isCartHidden={isCartHidden} />
            {isCartHidden ? null : <CartDropdown />}
        </SC.Cart>
    );
};

export default Cart;
