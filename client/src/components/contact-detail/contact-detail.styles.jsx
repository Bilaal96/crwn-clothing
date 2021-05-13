import styled from 'styled-components/macro';

export const ContactDetail = styled.div`
    & + & {
        margin-top: 3rem;
    }
`;

export const Title = styled.h3`
    font-size: clamp(1.6rem, 2vw, 1.8rem);
    color: ${({ theme }) => theme.colors.greenHaze};
    margin-bottom: 0.6rem;
`;
export const Value = styled.p`
    font-size: clamp(1.4rem, 2vw, 1.6rem);
    color: ${({ theme }) => theme.colors.charcoal};
`;
