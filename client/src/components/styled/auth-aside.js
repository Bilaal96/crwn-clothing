import styled from 'styled-components/macro';
import mediaQuery from '../../theme/media-queries';

// Wrapper
export const AuthAside = styled.div`
    display: grid;
    gap: 1rem;
    height: 100%;

    &.sign-up-aside {
        height: max-content;
    }

    button {
        align-self: flex-end;
    }
`;

// Heading
export const Heading = styled.h2`
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.coral};
    text-align: center;
    letter-spacing: 0.1rem;

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
    margin: 0 0 3rem 2rem;

    &:last-child {
        margin: 0 0 1.6rem 2rem;
    }
`;

export const CtaIcon = styled.div`
    width: 4rem;
    height: 4rem;
    margin: 0 2rem 1rem 0;
`;

export const ClothesIcon = styled(CtaIcon)`
    position: relative;

    .dress,
    .trench-coat {
        position: absolute;
        width: 110%;
        bottom: 0.5rem;
        right: -1rem;
    }

    .trench-coat {
        width: 100%;
        right: -0.5rem;
    }

    .hoodie,
    .puffer-jacket {
        position: absolute;
        width: 100%;
        bottom: -0.5rem;
        right: 1rem;
    }

    .puffer-jacket {
        right: 1.5rem;
    }
`;

export const CtaText = styled.span`
    max-width: 70%;
    font-size: clamp(1.2rem, 2vw, 1.4rem);

    h3 {
        color: ${({ theme }) => theme.colors.greenHaze};
    }

    p {
        color: ${({ theme }) => theme.colors.charcoal};
        font-weight: 600;
    }
`;
