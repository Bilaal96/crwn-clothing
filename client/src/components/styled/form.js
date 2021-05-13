import styled from 'styled-components/macro';
import mediaQuery from '../../theme/media-queries';

export const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    /* fieldset - groups form controls and labels */
    fieldset {
        border: none;

        /* legend - a caption for the fieldset */
        legend {
            font-size: 1.4rem;
            text-align: center;
            letter-spacing: 0.1rem;
            margin-bottom: 3rem;

            ${mediaQuery.laptop} {
                text-align: left;
            }
        }
    }

    .form-input-label {
        font-weight: 600;
    }
`;

export const FormTitle = styled.h2`
    /* font-size: ${({ theme: { fontSize } }) => fontSize.h2.xs}; */
    font-size: clamp(1.9rem, 2vw, 2.4rem);
    color: ${({ theme }) => theme.colors.pelorous};
    text-align: center;
    letter-spacing: 0.1rem;
    margin-bottom: 1rem;

    ${mediaQuery.laptop} {
        text-align: left;
    }
`;
