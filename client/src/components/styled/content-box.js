import styled from 'styled-components/macro';
import mediaQuery from '../../theme/media-queries';

export const ContentBoxContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    ${mediaQuery.laptop} {
        flex-direction: row;
    }

    ${mediaQuery.largeScreen} {
        width: 90%;
        margin: 0 auto;
    }
`;

export const ContentBox = styled.div`
    background: white;
    width: 100%;
    height: max-content;
    padding: 1.6rem;
    border-radius: 0.3rem;
    flex: 1;
    box-shadow: 0 0 0.8rem 0.1rem rgba(0, 0, 0, 0.1);

    p {
        margin-bottom: 1.6rem;
    }

    ${mediaQuery.tablet} {
        padding: 2rem;
    }

    ${mediaQuery.laptop} {
        width: 50%;
        padding: 3rem;
        box-shadow: 0 0 0.8rem 0.1rem rgba(0, 0, 0, 0.1);
    }
`;

export const BoxHeading = styled.h2`
    width: 100%;
    background: rgba(0, 0, 0, 0.1);
    padding: 1rem;
    font-size: ${({ theme: { fontSize } }) => fontSize.h2.sm};
    color: ${({ theme }) => theme.colors.mistyBlue};
    margin-bottom: 2rem;
    text-align: center;
`;

// Use MainContentBox as primary-content container
// Regular ContentBox acts as "aside"/secondary-content
//  when paired with MainContentBox
export const MainContentBox = styled(ContentBox)`
    margin: 0 0 1rem 0;

    ${mediaQuery.laptop} {
        margin: 0 1rem 0 0;
        flex: 2;
    }
    ${mediaQuery.desktop} {
        margin: 0 2rem 0 0;
    }
`;
