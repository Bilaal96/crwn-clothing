import styled from 'styled-components';
import { mediaQuery } from '../../App.styles';

export const DirectoryWrapper = styled.nav`
    display: grid;
    height: 100%;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, 250px);
    grid-template-areas:
        'mens'
        'womens'
        'hats'
        'jackets'
        'footwear';
    gap: 1.2rem;
    margin-bottom: 2rem;

    ${mediaQuery.tablet} {
        grid-template-columns: repeat(2, auto);
        grid-template-rows: repeat(2, 350px) 400px;
        grid-template-areas:
            'mens womens'
            'hats hats'
            'jackets footwear';
        gap: 1.5rem;
        margin-bottom: 3rem;
    }

    ${mediaQuery.desktop} {
        grid-template-columns: repeat(6, 1fr);
        grid-template-rows: 380px 400px;
        grid-template-areas:
            'hats hats jackets jackets footwear footwear'
            'womens womens womens mens mens mens';
        gap: 1.8rem;
        margin-bottom: 4rem;
    }
`;
