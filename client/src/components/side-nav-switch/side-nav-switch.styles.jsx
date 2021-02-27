import styled, { css } from 'styled-components';
import mediaQuery from '../../theme/media-queries';

// NOTE: PARENT FLEX CONTAINER IS Header styled-component

// Clickable Wrapper around BurgerIcon
export const SideNavSwitch = styled.button`
    width: 3.5rem;
    height: 3.5rem;
    margin: 0.6rem 0 0 0.4rem;
    cursor: pointer;
    transition: transform 0.3s ease;

    /* Position 1st in flex container */
    order: -1;

    /* Remove default btn styles */
    border: none;
    background: white;

    /*  If SideNav is open, make close (X) switch larger */
    ${({ $isOpen }) =>
        $isOpen &&
        css`
            transform: scale(1.2);
        `}

    /* Accessibility */
    &:focus {
        outline: none;
        box-shadow: 0 0 0.4rem 0.2rem ${({ theme }) => theme.colors.black};
    }

    /* Remove focus when active */
    &:active,
    &:active:focus {
        outline: none;
        box-shadow: none;
    }

    ${mediaQuery.desktop} {
        display: none;
    }
`;

// Burger Icon - styles 3 lines
export const BurgerIcon = styled.div`
    /* Center Children (i.e. ".middle-line") */
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;

    /* Prep pseudo-elements */
    &::before,
    &::after {
        content: '';
    }

    /* Style Burger Lines */
    &::before, /* -- Top */
    .middle-line, /* -- Middle */
    &&::after /* -- Bottom */ {
        width: 100%;
        height: 0.4rem;
        margin: 0.4rem 0;
        border-radius: 0.4rem;
        transition: all 0.3s ease-in;

        /* Start tranformations from left-side of each line */
        transform-origin: 1%;
    }

    /* Top Line - Blue */
    &::before {
        background: ${({ theme }) => theme.colors.pelorous};
        transform: ${({ $isOpen }) =>
            $isOpen ? 'rotate(45deg)' : 'rotate(0deg)'};
    }

    /* Middle Line - Coral */
    .middle-line {
        background: ${({ theme }) => theme.colors.coral};

        transform: ${({ $isOpen }) =>
            $isOpen ? 'translateX(-300%)' : 'translateX(0%)'};
        opacity: ${({ $isOpen }) => ($isOpen ? '0' : '1')};
    }

    /* Bottom Line - charcoal */
    &::after {
        background: ${({ theme }) => theme.colors.charcoal};
        opacity: 0.8;

        transform: ${({ $isOpen }) =>
            $isOpen ? 'rotate(-45deg)' : 'rotate(0deg)'};
    }
`;
