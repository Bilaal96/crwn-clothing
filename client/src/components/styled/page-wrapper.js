import styled from 'styled-components/macro';
import mediaQuery from '../../theme/media-queries';

/**
 * PageWrapper aligns the MAIN content for a page
 * As Header has fixed position, margin-top is needed to
   push the Page Content below the Header
 
 * --- Calculating padding-top for PageWrapper ---
 * PageWrapper margin-top
    = Header's height + PageWrapper's margin-bottom
 
 * NOTE: 1 rem = 10px
 */
const PageWrapper = styled.main`
    margin: 9rem 2rem 2rem;

    ${mediaQuery.tablet} {
        margin: 11rem 4rem 3rem;
    }

    ${mediaQuery.laptop} {
        margin: 13rem 6.5rem 4rem;
    }
    ${mediaQuery.desktop} {
        /* margin: 13rem 6.5rem 4rem; */
        margin: 13rem 8rem 4rem;
    }
    ${mediaQuery.largeScreen} {
        margin: 13rem 16rem 4rem;
    }
`;

export default PageWrapper;
