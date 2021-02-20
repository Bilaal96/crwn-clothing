import styled from 'styled-components';
import { mediaQuery } from './config/theme';

/**
 * PageWrapper aligns the MAIN content for a page
 * As Header has fixed position padding-top is needed to
   push the Page Content below the Header
 
 * --- Calculating padding-top for PageWrapper ---
 * PageWrapper padding-top
    = Header's height + PageWrapper's padding-bottom
 
 * NOTE: 1 rem = 10px
 */
export const PageWrapper = styled.section`
    padding: 9rem 2rem 2rem;

    ${mediaQuery.tablet} {
        padding: 11rem 4rem 3rem;
    }

    ${mediaQuery.desktop} {
        padding: 13rem 6.5rem 4rem;
    }
`;

// Conditionally rendered when SideNav is toggled
export const PageOverlay = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: ${({ theme }) => theme.colors.overlay};

    ${mediaQuery.desktop} {
        display: none;
    }
`;
