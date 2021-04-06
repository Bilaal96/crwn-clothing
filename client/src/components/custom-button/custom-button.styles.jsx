import styled, { css } from 'styled-components';
import mediaQuery from '../../theme/media-queries';

// Default styles for CustomButton
// -- returned if no $styleType prop passed to CustomButton
const defaultButtonStyles = ({ theme: { colors } }) => css`
    background-color: ${colors.black};
    color: ${colors.white};
    border: 0.1rem solid transparent;

    &:hover {
        background-color: ${colors.white};
        color: ${colors.black};
        border: 0.1rem solid ${colors.black};
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 0.4rem 0.2rem ${({ theme }) => theme.colors.pelorous};
    }
`;

// Styles rendered based on props.$styleType
// -- $styleType = "col-item"
const collectionItemButtonStyles = ({ theme: { colors } }) => css``;

// -- $styleType = "inverted"
const invertedButtonStyles = ({ theme: { colors } }) => css`
    background-color: ${colors.white};
    color: ${colors.black};
    border: 0.1rem solid black;

    &:hover {
        background-color: ${colors.black};
        color: ${colors.white};
        border: 0.1rem solid transparent;
    }
`;

// -- $styleType = "isGoogleSignIn"
const googleSignInStyles = ({ theme: { colors } }) => css`
    background-color: ${colors.pelorous};
    color: ${colors.white};
    border: 0.1rem solid transparent;
    width: 100%;
    ${'' /* font-size: 1.1rem; */} /* FIXME temporary fix */

    &:hover {
        background-color: ${colors.white};
        color: ${colors.pelorous};
        border: 0.1rem solid ${colors.pelorous};
    }
`;

// -- $styleType = "checkout"
const cartCheckoutButtonStyles = ({ theme: { colors } }) => css`
    background-color: ${colors.coral};
    color: ${colors.white};
    border: none;
    opacity: 0.9;

    &:hover {
        background-color: ${colors.mistyBlue};
        color: ${colors.white};
        border: none;
        opacity: 0.8;
    }
`;

// Function receives props via CustomButton
// -- conditionally renders styles based on props
const getButtonStyles = (props) => {
    switch (props.$styleType) {
        case 'inverted':
            return invertedButtonStyles;
        case 'col-item':
            return collectionItemButtonStyles(props);
        case 'googleSignIn':
            return googleSignInStyles(props);
        case 'cartCheckout':
            return cartCheckoutButtonStyles(props);
        default:
            return defaultButtonStyles;
    }
};

// Base styled-component
export const CustomButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 16.5rem;
    width: auto;
    height: 5rem;
    letter-spacing: 0.05rem;
    padding: 0 3.5rem;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.white};
    text-transform: uppercase;
    font-family: 'Open Sans', sans-serif;
    font-weight: 700;
    border-radius: 0.4rem;
    border: none;
    cursor: pointer;
    transition: all 0.2s;

    &:focus {
        outline: none;
        box-shadow: 0 0 0.4rem 0.2rem ${({ theme }) => theme.colors.black};
    }

    ${getButtonStyles}

    &:active {
        outline: none;
        box-shadow: none;
    }
`;
