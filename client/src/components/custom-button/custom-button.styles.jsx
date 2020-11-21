import styled, { css } from 'styled-components';

// Base styles that may conflict with conditionally rendered styles
const buttonStyles = css`
    background-color: black;
    color: white;
    border: 1px solid transparent;

    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
    }
`;

// Styles rendered based on props
// -- prop: inverted
const invertedButtonStyles = css`
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
        background-color: black;
        color: white;
        border: 1px solid transparent;
    }
`;

// -- prop: isGoogleSignIn
const googleSignInStyles = css`
    background-color: #4285f4;
    color: white;
    border: 1px solid transparent;

    &:hover {
        background-color: white;
        color: #357ae8;
        border: 1px solid #357ae8;
    }
`;

// Function receives CustomButton props
// -- conditionally renders styles based on props
const getButtonStyles = ({ inverted, isGoogleSignIn }) => {
    if (isGoogleSignIn) {
        return googleSignInStyles;
    }

    return inverted ? invertedButtonStyles : buttonStyles;
};

// Base styled-component
export const CustomButtonContainer = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px;
    font-size: 15px;
    color: white;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bold;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    transition: all 0.2s;
    ${getButtonStyles}
`;
