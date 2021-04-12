import styled from 'styled-components/macro';

export const AuthFormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    /* fieldset - groups form controls and labels */
    fieldset {
        border: none;

        /* legend - a caption for the fieldset */
        legend {
            font-size: 1.4rem;
            letter-spacing: 0.1rem;
            margin-bottom: 3rem;
        }
    }

    .form-input-label {
        font-weight: 600;
    }

    button {
        width: 100%;
    }

    /* button[type='submit'] {
        background-color: ${({ theme }) => theme.colors.greenHaze};
    } */
`;

export const AuthFormTitle = styled.h2`
    font-size: ${({ theme: { fontSize } }) => fontSize.h2.xs};
    color: ${({ theme }) => theme.colors.pelorous};
    margin-bottom: 1rem;
`;
