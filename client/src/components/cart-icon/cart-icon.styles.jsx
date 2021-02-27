import styled, { css } from 'styled-components';
import mediaQuery from '../../theme/media-queries';
import { ReactComponent as SvgShoppingBag } from '../../assets/shopping-bag.svg';

export const CartDropdownSwitch = styled.div`
    position: relative;
    width: 4.5rem;
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.6rem;
    cursor: pointer;
    transition: transform 0.3s ease;

    &:focus {
        outline: none;
        box-shadow: 0 0 0.4rem 0.2rem ${({ theme }) => theme.colors.black};
    }

    /* Remove focus on click */
    &:active {
        outline: none;
        box-shadow: none;
    }

    ${mediaQuery.tablet} {
        height: 4.2rem;
        font-size: 1.8rem;
    }
    ${mediaQuery.desktop} {
        height: 4.5rem;
        font-size: 1.8rem;
    }
`;

// If Cart is showing => scale SVG size & change fill properties
const cartDropdownShowingStyles = ({ $isCartHidden, theme }) =>
    !$isCartHidden &&
    css`
        transform: scale(1.04);

        #Bag,
        #Bag-top {
            fill: ${theme.colors.pelorous};
        }

        #Handle,
        .Groove {
            fill: ${theme.colors.coral};
        }
    `;

// Unique style if on Checkout Page
const onCheckoutPageStyles = ({ $currentPath, theme }) =>
    $currentPath === '/checkout' &&
    css`
        #Bag,
        #Bag-top {
            fill: ${theme.colors.coral};
        }

        #Handle,
        .Groove {
            fill: ${theme.colors.pelorous};
        }
    `;

export const CartIcon = styled(SvgShoppingBag)`
    position: absolute;
    width: 100%;
    height: 100%;
    transition: all 0.3s ease;

    #Bag,
    #Bag-top {
        fill: ${({ theme }) => theme.colors.pelorous};
    }

    #Handle,
    .Groove {
        fill: ${({ theme }) => theme.colors.lightCharcoal};
    }

    /* Click / Mobile Touch Feedback */
    ${CartDropdownSwitch}:active & {
        #Handle,
        .Groove {
            fill: ${({ theme }) => theme.colors.pelorous};
        }
        #Bag,
        #Bag-top {
            fill: ${({ theme }) => theme.colors.lightCharcoal};
        }
    }

    /* If Cart is showing => scale SVG size & change fill properties */
    ${cartDropdownShowingStyles}

    /* Unique style if on Checkout Page */
    ${onCheckoutPageStyles}
`;

export const CartItemsCount = styled.span`
    position: absolute;
    bottom: 0.4rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.lightCharcoal};

    ${CartDropdownSwitch}:active & {
        color: ${({ theme }) => theme.colors.pelorous};
    }
    ${mediaQuery.tablet} {
        bottom: 0.3rem;
    }

    ${mediaQuery.desktop} {
        bottom: 0.5rem;
    }
`;
