import styled from 'styled-components/macro';
import mediaQuery from '../../theme/media-queries';

export const Directory = styled.nav`
    display: grid;
    height: 100%;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, 25rem);
    grid-template-areas:
        'mens'
        'womens'
        'hats'
        'jackets'
        'footwear';
    gap: 1.2rem;

    ${mediaQuery.tablet} {
        grid-template-columns: repeat(2, auto);
        grid-template-rows: 35rem 40rem 35rem;
        grid-template-areas:
            'mens womens'
            'hats hats'
            'jackets footwear';
        gap: 1.5rem;
    }

    /* Keeps tablet layout but make grid rows slightly taller */
    ${mediaQuery.laptop} {
        grid-template-rows: 39rem 40rem 39rem;
    }

    ${mediaQuery.desktop} {
        /* Rows do not extend outside of viewport */
        /* so at fullscreen there is no scroll bar */
        grid-template-columns: repeat(6, 1fr);
        grid-template-rows: 37rem 37.6rem;
        grid-template-areas:
            'hats hats jackets jackets footwear footwear'
            'womens womens womens mens mens mens';
        gap: 1.8rem;
    }
`;
