import styled from 'styled-components/macro';
import mediaQuery from '../../theme/media-queries';

// Wrapper
export const SignInAside = styled.div`
    display: grid;
    gap: 1rem;
    height: 100%;

    button {
        align-self: flex-end;
        width: 100%;
        background-color: ${({ theme }) => theme.colors.greenHaze};

        &:hover {
            background-color: ${({ theme }) => theme.colors.white};
            color: ${({ theme }) => theme.colors.greenHaze};
            border-color: ${({ theme }) => theme.colors.greenHaze};
        }
    }
`;

// Heading
export const Heading = styled.h2`
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.greenHaze};
    text-align: center;

    ${mediaQuery.laptop} {
        text-align: left;
    }
`;

// -- Child
export const SubHeading = styled.p`
    color: black;
    font-size: 1.4rem;
    font-weight: 400;
    letter-spacing: 0.1rem;
    margin: 1rem 0 0 0.2rem;
`;

// CtaList
export const CtaList = styled.ul`
    width: 100%;
    list-style-type: none;

    padding: 0 1rem;
    margin: 2rem 0 0;
`;

// -- Children
export const CtaListItem = styled.li`
    display: flex;
    flex-direction: row;

    margin: 0 0 2rem 1rem;
`;

export const CtaIcon = styled.div`
    width: 4rem;
    height: 4rem;
    margin: 0 2rem 1rem 0;
`;

export const TrendsettersIcon = styled(CtaIcon)`
    position: relative;

    .dress {
        position: absolute;
        width: 100%;
        top: -1rem;
        left: -1.5rem;
    }

    .hoodie {
        position: absolute;
        width: 100%;
        top: 0rem;
        left: 0rem;
    }
`;

export const CtaText = styled.span`
    max-width: 70%;
    font-size: clamp(1.2rem, 2vw, 1.4rem);

    h3 {
        color: ${({ theme }) => theme.colors.coral};
    }

    p {
        color: ${({ theme }) => theme.colors.charcoal};
        font-weight: 600;
    }
`;
