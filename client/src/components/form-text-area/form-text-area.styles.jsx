import styled from 'styled-components/macro';
import mediaQuery from '../../theme/media-queries';

export const TextArea = styled.textarea`
    display: block;
    width: 100%;
    height: 200px;
    font-size: clamp(1.4rem, 2vw, 1.6rem);
    font-family: 'Open Sans', sans-serif;
    color: ${({ theme }) => theme.colors.charcoal};
    padding: 1rem;
    margin-bottom: ${({ maxLength }) => (maxLength ? '1rem' : '3rem')};
    border: 0.1rem solid ${({ theme }) => theme.colors.charcoal};
    border-radius: 0.2rem;
    letter-spacing: 0.05rem;
    resize: none;

    ${mediaQuery.hoverable} {
        &:hover {
            padding: 0.9rem;
            border: 0.2rem solid ${({ theme }) => theme.colors.bahamaBlue};
        }
    }

    &:focus {
        padding: 0.9rem;
        outline: none !important;
        border: 0.2rem solid ${({ theme }) => theme.colors.pelorous};
        color: ${({ theme }) => theme.colors.black};
    }

    &::placeholder {
        letter-spacing: 0.2rem;
    }
`;

export const CharCount = styled.div`
    font-size: clamp(1.2rem, 1vw, 1.4rem);
    margin-bottom: 3rem;
    padding-left: 0.5rem;
    color: grey;

    /* Change styles when close to TextArea's char limit */
    ${({ $maxChars, $charsUsed, theme: { colors } }) =>
        $maxChars - $charsUsed <= 30 &&
        `
            color: #d03d3d;
            font-weight: 600;
        `}

    span + span {
        margin-left: 0.4rem;
    }
`;
