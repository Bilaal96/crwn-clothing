import styled, { css } from 'styled-components/macro';
import mediaQuery from '../../theme/media-queries';

// Mixin - use to shrink label on focus & if input.value has length
const shrinkLabel = css`
    top: -1.2rem;
    left: 0rem;
    font-size: 1.2rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.pelorous};
`;

export const FormGoup = styled.div`
    position: relative;
    margin: 0 0 3rem 0;
`;

export const FormInputLabel = styled.label`
    position: absolute;
    top: 1rem;
    left: 0.5rem;
    color: grey;
    font-size: 1.6rem;
    pointer-events: none;
    transition: all 0.3s ease;

    /* Maintain shrinked label if input.value has length */
    &.shrink {
        ${shrinkLabel}
    }
`;

export const FormInput = styled.input`
    display: block;
    width: 100%;
    background: none;
    color: ${({ theme }) => theme.colors.black};
    font-size: 1.8rem;
    padding: 1rem 0.5rem;

    border: none;
    border-radius: 0;
    border-bottom: 0.1rem solid ${({ theme }) => theme.colors.charcoal};

    /* Replace Google auto-complete background-color */
    &:-webkit-autofill {
        box-shadow: 0 0 0 30px white inset;
        -webkit-box-shadow: 0 0 0 30px white inset;
    }

    &[type='password'] {
        letter-spacing: 0.5rem;
    }

    &:focus {
        outline: 0;
        padding: 1rem 0.5rem 0.9rem;
        border-bottom: 0.2rem solid ${({ theme }) => theme.colors.pelorous};

        /* Shrink label on input focus */
        & ~ ${FormInputLabel} {
            ${shrinkLabel}
        }
    }
`;
