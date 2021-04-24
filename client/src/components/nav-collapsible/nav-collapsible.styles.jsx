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
    border-right: ${({ isOpen, theme }) =>
        isOpen ? `0.3rem solid ${theme.colors.charcoal}` : 'none'};
    font-weight: 600;

    background: #f4eae6;
    background: ${({ theme }) => theme.colors.ivory};
    /* Lines In Motion - http://www.heropatterns.com/ */
    background-image: url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9 0h2v20H9V0zm25.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm-20 20l1.732 1-10 17.32-1.732-1 10-17.32zM58.16 4.134l1 1.732-17.32 10-1-1.732 17.32-10zm-40 40l1 1.732-17.32 10-1-1.732 17.32-10zM80 9v2H60V9h20zM20 69v2H0v-2h20zm79.32-55l-1 1.732-17.32-10L82 4l17.32 10zm-80 80l-1 1.732-17.32-10L2 84l17.32 10zm96.546-75.84l-1.732 1-10-17.32 1.732-1 10 17.32zm-100 100l-1.732 1-10-17.32 1.732-1 10 17.32zM38.16 24.134l1 1.732-17.32 10-1-1.732 17.32-10zM60 29v2H40v-2h20zm19.32 5l-1 1.732-17.32-10L62 24l17.32 10zm16.546 4.16l-1.732 1-10-17.32 1.732-1 10 17.32zM111 40h-2V20h2v20zm3.134.84l1.732 1-10 17.32-1.732-1 10-17.32zM40 49v2H20v-2h20zm19.32 5l-1 1.732-17.32-10L42 44l17.32 10zm16.546 4.16l-1.732 1-10-17.32 1.732-1 10 17.32zM91 60h-2V40h2v20zm3.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm24.026 3.294l1 1.732-17.32 10-1-1.732 17.32-10zM39.32 74l-1 1.732-17.32-10L22 64l17.32 10zm16.546 4.16l-1.732 1-10-17.32 1.732-1 10 17.32zM71 80h-2V60h2v20zm3.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm24.026 3.294l1 1.732-17.32 10-1-1.732 17.32-10zM120 89v2h-20v-2h20zm-84.134 9.16l-1.732 1-10-17.32 1.732-1 10 17.32zM51 100h-2V80h2v20zm3.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm24.026 3.294l1 1.732-17.32 10-1-1.732 17.32-10zM100 109v2H80v-2h20zm19.32 5l-1 1.732-17.32-10 1-1.732 17.32 10zM31 120h-2v-20h2v20z' fill='%233191ca' fill-opacity='0.32' fill-rule='evenodd'/%3E%3C/svg%3E");

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
