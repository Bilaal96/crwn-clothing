import styled from 'styled-components';
import mediaQuery from '../../theme/media-queries';

export const ErrorContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    width: 100%;
    height: 75vh;
`;

export const ErrorMessage = styled.h2`
    font-size: clamp(1.8rem, 4vw, 3.6rem);
    font-weight: 600;
    color: ${({ theme }) => theme.colors.charcoal};
    text-align: center;
    letter-spacing: 0.1rem;
`;

export const ErrorImage = styled.div`
    display: block;
    background-image: ${({ imageUrl }) => `url(${imageUrl})`};
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    padding: 12rem;

    ${mediaQuery.tablet} {
        padding: 16rem;
    }

    ${mediaQuery.desktop} {
        padding: 20rem;
    }
`;

export const ErrorImageText = styled.p`
    font-size: clamp(2.1rem, 5vw, 4.2rem);
    font-weight: 700;
    color: #2f8e89;
    text-align: center;
`;
