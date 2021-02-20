import styled from 'styled-components';
import { mediaQuery } from '../../config/theme';

/**
 * ----- NavContainer -----
 * MOBILE & TABLET: styled as togglable side drawer menu
 * DESKTOP: standard navbar with nav-links
 
 * NOTE: "top" property should equal Header "height"
    See header.styles.jsx
 */
export const NavContainer = styled.nav`
    /* SideNav Styles - Mobile / Tablet */
    position: fixed;
    z-index: 99;
    top: 7rem;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    width: 70vw;
    padding: 4rem 0;
    border-right: ${({ isOpen, theme }) =>
        isOpen ? `0.3rem solid ${theme.colors.charcoal}` : 'none'};
    font-weight: 600;

    /* Fallback Background Colour */
    background: ${({ theme }) => theme.colors.mistyBlue};
    /* vertical gradient - top - mistyBlue to lightCharcaol - bottom */
    background: linear-gradient(
        180deg,
        rgba(47, 80, 97, 1) 40%,
        rgba(91, 117, 134, 1) 100%
    );

    /* SideNav Transition: slide-in from left of viewport */
    transform-origin: left;
    transform: ${(props) =>
        props.isOpen ? 'translateX(0%)' : 'translateX(-100%)'};
    transition: transform 0.3s ease-in;

    ${mediaQuery.tablet} {
        top: 8rem;
        width: 45vw;
        padding: 5.5rem 0;
    }

    ${mediaQuery.desktop} {
        /* Top Nav Styles - Desktop */
        position: static;
        height: 0;
        width: 0;
        padding: 0;
        background: none;
        border: none;
        transform: unset;
        transition: unset;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        font-weight: 600;
    }
`;
