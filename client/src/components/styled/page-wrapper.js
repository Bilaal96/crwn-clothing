import styled from 'styled-components/macro';
import mediaQuery from '../../theme/media-queries';

/**
 * PageWrapper aligns the MAIN content for a page
 
 * Setting "max-width" allows us to center the 
   content with "margin: 0 auto" --> ensuring 
   there is plenty of left & right spacing  

 * As Header has a fixed position, PageWrapper is 
   positioned absolute (relative to the <body>) 
 * This way we can use "top" property to position 
   the Page Content below the Header

 * NOTE: The value of "top" is EQUAL to the 
   "height" of Header at each breakpoint
*/

const PageWrapper = styled.main`
    max-width: 1400px;
    height: max-content;

    position: absolute;
    top: 7rem;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 2rem;
    margin: 0 auto;

    ${mediaQuery.tablet} {
        top: 8rem;
        padding: 3rem;
    }

    ${mediaQuery.desktop} {
        top: 9rem;
        padding: 4rem;
    }
`;

export default PageWrapper;
