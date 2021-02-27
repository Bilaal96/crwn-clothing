import styled from 'styled-components/macro';
import mediaQuery from '../../theme/media-queries';

export const CartDropdown = styled.div`
    position: absolute;
    top: 6.5rem;
    right: -1rem;
    display: flex;
    flex-direction: column;
    width: 26rem;
    height: 34rem;
    padding: 2rem;
    background: ${({ theme }) => theme.colors.white};
    border: 0.1rem solid black;
    border-radius: 0.3rem;
    z-index: 100;

    /* Triangles */
    &::before,
    &::after {
        content: '';
        position: absolute;
        right: 2rem; /* position horizontally */
    }

    /* Border Triangle */
    &::before {
        top: -2rem; /* Control vertical position */

        /**
         * Border: top / left / right
         * Changing border-width shorthand-value adjusts width
         */
        border: 1.2rem solid transparent;
        border-top: none;
        border-bottom: 2rem solid black; /* Control triangle height */
    }

    /* Main Triangle */
    &::after {
        top: -1.8rem; /* Reduced to see triangle border */
        border: 1.2rem solid transparent;
        border-top: none; /* Control vertical position */
        border-bottom: 2rem solid ${({ theme }) => theme.colors.lightCharcoal};
        border-bottom: 2rem solid white;
    }

    button {
        height: 14%;
        margin-top: 1.5rem;
    }

    ${mediaQuery.tablet} {
        width: 28rem;
        height: 36rem;
        top: 6.7rem;
        right: -2.6rem;

        &::before,
        &::after {
            right: 3.6rem;
        }
    }

    ${mediaQuery.desktop} {
        width: 30rem;
        height: 38rem;
        top: 7rem;
        right: -2rem;

        &::before,
        &::after {
            right: 3rem;
        }
    }
`;

// Scrollable list containing CartItems
export const CartItemsContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: auto;
    font-weight: bold;

    /* Scrollbar Styles */
    &::-webkit-scrollbar {
        background: #eee;
        border-radius: 1rem;
        width: 1rem;
    }

    &::-webkit-scrollbar-thumb {
        background: #ccc;
        border-radius: 1rem;

        &:hover {
            background: #bbb;
        }

        &:active {
            background: #aaa;
        }
    }
`;

export const CartEmptyMessage = styled.span`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.6rem;
    font-weight: bold;
    letter-spacing: 0.15rem;
`;
