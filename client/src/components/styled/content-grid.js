import styled from 'styled-components/macro';
import mediaQuery from '../../theme/media-queries';

/**
 * A customisable Grid Container
 */
export const ContentGrid = styled.div.attrs((props) => ({
    $cols: props.cols || 'repeat(12, 1fr)',
    $rows: props.rows || 'none',
    $autoRows: props.autoRows || 'auto',
    $widthLg: props.widthLg || '100%',
}))`
    /* Mobile to Laptop: Single-column (stacked) Grid */
    display: grid;
    justify-content: center;
    grid-template-columns: 1fr;
    grid-template-rows: ${(props) => props.$rows};
    grid-auto-rows: ${(props) => props.$autoRows};
    gap: 1.8rem;

    ${mediaQuery.tablet} {
        gap: 2rem;
    }

    ${mediaQuery.laptop} {
        gap: 2.2rem;
    }

    /* Desktop: change to Multi-column Grid */
    ${mediaQuery.desktop} {
        grid-template-columns: ${(props) => props.$cols};
        gap: 2.4rem;
    }

    ${mediaQuery.largeScreen} {
        width: ${(props) => props.$widthLg};
        margin: 0 auto;
        gap: 2.6rem;
    }
`;

export const ContentGridItem = styled.div.attrs((props) => ({
    colStart: props.colStart || 'auto',
    colEnd: props.colEnd || 'auto',
    rowStart: props.rowStart || 'auto',
    rowEnd: props.rowEnd || 'auto',
}))`
    ${mediaQuery.desktop} {
        grid-column: ${(props) => props.colStart} / ${(props) => props.colEnd};
        grid-row: ${(props) => props.rowStart} / ${(props) => props.rowEnd};
    }
`;

export const ContentBox = styled.div.attrs((props) => ({
    $height: props.maxContent ? 'max-content' : '100%',
}))`
    width: 100%;
    height: ${(props) => props.$height};
    background: ${({ theme }) => theme.colors.white};
    padding: 1.6rem;
    border-radius: 0.3rem;
    box-shadow: 0 0 0.8rem 0.1rem rgba(0, 0, 0, 0.1);

    ${mediaQuery.tablet} {
        padding: 2rem;
    }

    ${mediaQuery.laptop} {
        padding: 3rem;
    }
`;
