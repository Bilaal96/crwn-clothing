import styled from 'styled-components/macro';
import mediaQuery from '../../theme/media-queries';

const PageHeading = styled.h1`
    width: 100%;
    padding: 1rem;
    background: rgba(0, 0, 0, 0.1);

    font-size: ${({ theme: { fontSize } }) => fontSize.h1.xs};
    font-weight: 600;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.3rem;
    margin-bottom: 0.8em;
    color: ${({ theme }) => theme.colors.mistyBlue};
    border-radius: 0.3rem;
    box-shadow: 0 0 0.8rem 0.1rem rgba(0, 0, 0, 0.3);

    ${mediaQuery.mobileLg} {
        font-size: ${({ theme: { fontSize } }) => fontSize.h1.sm};
    }
    ${mediaQuery.tablet} {
        font-size: ${({ theme: { fontSize } }) => fontSize.h1.md};
        /* margin-bottom: 3rem; */
    }
    ${mediaQuery.laptop} {
        font-size: ${({ theme: { fontSize } }) => fontSize.h1.lg};
    }
    ${mediaQuery.desktop} {
        font-size: ${({ theme: { fontSize } }) => fontSize.h1.xl};
        /* margin-bottom: 4rem; */
    }
`;

export default PageHeading;
