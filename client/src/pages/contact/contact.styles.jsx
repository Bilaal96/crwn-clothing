import styled from 'styled-components/macro';
import mediaQuery from '../../theme/media-queries';

export const AsideHeading = styled.h2`
    font-size: clamp(1.9rem, 2vw, 2.4rem);
    color: ${({ theme }) => theme.colors.coral};
    text-align: center;
    letter-spacing: 0.1rem;
    margin-bottom: 1.6rem;

    ${mediaQuery.laptop} {
        text-align: left;
    }
`;

export const GoogleMap = styled.iframe`
    width: 100%;
    height: 300px;
    margin-top: 3rem;
    border: 0;
`;
