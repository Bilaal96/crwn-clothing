import styled from 'styled-components/macro';
import mediaQuery from '../../theme/media-queries';

const PageHeading = styled.h1`
    width: 100%;
    padding: 1rem;
    background: rgba(0, 0, 0, 0.1);

    /* ------------------ */
    /* background: linear-gradient(
        135deg,
        rgba(30, 83, 115, 1) 0%,
        rgba(245, 150, 116, 1) 30%,
        rgba(248, 131, 121, 1) 100%
    );
    background: linear-gradient(
        135deg,
        rgba(30, 83, 115, 0.8) 0%,
        rgba(245, 150, 116, 0.8) 30%,
        rgba(248, 131, 121, 0.8) 100%
    ); */
    /* ------------------ */

    /* ------------------ */
    /* background: linear-gradient(
        135deg,
        rgba(66, 151, 160, 1) 0%,
        rgba(245, 150, 116, 1) 30%,
        rgba(248, 131, 121, 1) 100%
    ); */
    /* ___ #1 ___ */
    /* background: linear-gradient(
        135deg,
        rgba(66, 151, 160, 0.7) 0%,
        rgba(245, 150, 116, 0.7) 30%,
        rgba(248, 131, 121, 0.7) 100%
    ); */
    /* ------------------ */

    /* ------------------ */
    /* ___ #2 ___ */
    /* background: linear-gradient(
        135deg,
        rgba(0, 0, 0, 0.1) 0%,
        rgba(248, 131, 121, 0.6) 35%,
        rgba(245, 150, 116, 0.6) 65%,
        rgba(0, 0, 0, 0.1) 100%
    ); */
    /* ___ #3 ___ */
    /* background: linear-gradient(
        135deg,
        rgba(0, 0, 0, 0.1) 0%,
        rgba(245, 150, 116, 0.6) 35%,
        rgba(66, 151, 160, 0.7) 50%,
        rgba(248, 131, 121, 0.6) 65%,
        rgba(0, 0, 0, 0.1) 100%
    ); */
    /* ------------------ */

    font-size: ${({ theme: { fontSize } }) => fontSize.h1.xs};
    font-weight: 600;
    text-align: center;
    letter-spacing: 0.3rem;
    margin-bottom: 0.8em;
    color: ${({ theme }) => theme.colors.mistyBlue};
    border-radius: 0.2rem;

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
