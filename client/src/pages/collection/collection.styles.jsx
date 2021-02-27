import styled from 'styled-components/macro';
import mediaQuery from '../../theme/media-queries';

export const CollectionPage = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const CollectionItemsGrid = styled.div`
    width: 100%;
    min-height: 100%;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-auto-rows: 40rem;
    gap: 5rem;
    margin-top: 2rem;

    ${mediaQuery.mobileLg} {
        grid-template-columns: repeat(1, 1fr);
        gap: 5rem 2rem;
    }
    ${mediaQuery.tablet} {
        grid-template-columns: repeat(2, 1fr);
    }
    ${mediaQuery.laptop} {
        grid-template-columns: repeat(2, 1fr);
    }
    ${mediaQuery.desktop} {
        grid-template-columns: repeat(3, 1fr);
    }
    ${mediaQuery.largeScreen} {
        grid-template-columns: repeat(4, 1fr);
    }
`;
