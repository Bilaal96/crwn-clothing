import styled from 'styled-components/macro';
import mediaQuery from '../../theme/media-queries';

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
    /*   border-right: ${({ isOpen, theme }) =>
        isOpen ? `0.3rem solid ${theme.colors.charcoal}` : 'none'}; */
    border-right: ${({ theme }) => `0.3rem solid ${theme.colors.charcoal}`};
    font-weight: 600;

    background: #f4eae6;
    background: ${({ theme }) => theme.colors.ivory};

    /* Jupiter - http://www.heropatterns.com/ */
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='52' height='52' viewBox='0 0 52 52'%3E%3Cpath fill='%233191ca' fill-opacity='0.14' d='M0 17.83V0h17.83a3 3 0 0 1-5.66 2H5.9A5 5 0 0 1 2 5.9v6.27a3 3 0 0 1-2 5.66zm0 18.34a3 3 0 0 1 2 5.66v6.27A5 5 0 0 1 5.9 52h6.27a3 3 0 0 1 5.66 0H0V36.17zM36.17 52a3 3 0 0 1 5.66 0h6.27a5 5 0 0 1 3.9-3.9v-6.27a3 3 0 0 1 0-5.66V52H36.17zM0 31.93v-9.78a5 5 0 0 1 3.8.72l4.43-4.43a3 3 0 1 1 1.42 1.41L5.2 24.28a5 5 0 0 1 0 5.52l4.44 4.43a3 3 0 1 1-1.42 1.42L3.8 31.2a5 5 0 0 1-3.8.72zm52-14.1a3 3 0 0 1 0-5.66V5.9A5 5 0 0 1 48.1 2h-6.27a3 3 0 0 1-5.66-2H52v17.83zm0 14.1a4.97 4.97 0 0 1-1.72-.72l-4.43 4.44a3 3 0 1 1-1.41-1.42l4.43-4.43a5 5 0 0 1 0-5.52l-4.43-4.43a3 3 0 1 1 1.41-1.41l4.43 4.43c.53-.35 1.12-.6 1.72-.72v9.78zM22.15 0h9.78a5 5 0 0 1-.72 3.8l4.44 4.43a3 3 0 1 1-1.42 1.42L29.8 5.2a5 5 0 0 1-5.52 0l-4.43 4.44a3 3 0 1 1-1.41-1.42l4.43-4.43a5 5 0 0 1-.72-3.8zm0 52c.13-.6.37-1.19.72-1.72l-4.43-4.43a3 3 0 1 1 1.41-1.41l4.43 4.43a5 5 0 0 1 5.52 0l4.43-4.43a3 3 0 1 1 1.42 1.41l-4.44 4.43c.36.53.6 1.12.72 1.72h-9.78zm9.75-24a5 5 0 0 1-3.9 3.9v6.27a3 3 0 1 1-2 0V31.9a5 5 0 0 1-3.9-3.9h-6.27a3 3 0 1 1 0-2h6.27a5 5 0 0 1 3.9-3.9v-6.27a3 3 0 1 1 2 0v6.27a5 5 0 0 1 3.9 3.9h6.27a3 3 0 1 1 0 2H31.9z'%3E%3C/path%3E%3C/svg%3E");
    background-position: center;

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
