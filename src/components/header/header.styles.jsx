import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

// ---------- Shared Styles ----------
// ----- Option -----
const optionContainerStyles = css`
    position: relative;
    padding: 10px 15px;
    margin-left: 10px;
    text-align: center;
    font-size: 1.4rem;
    font-family: 'Bebas Neue', cursive;
    letter-spacing: 0.15rem;
    cursor: pointer;
    color: rgb(95, 95, 95);
    background: white;
    border-radius: 3px;
    opacity: 0.7;
    transition: opacity 0.4s;
    z-index: 1;

    &:visited {
        color: rgb(95, 95, 95);
    }
`;

// Set background-gradient on .option:before, hidden by default with "opacity: 0"
const optionBackgroundStyles = css`
    &:before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: linear-gradient(#fff, #f6f6f6);
        border-radius: 3px;
        z-index: -1;
        opacity: 0;
        transform: scale(0);
        transform-origin: bottom;
        transition: all 0.3s ease;
    }
`;

// Pseudo-border on header option
// -- hidden by default, visibility property is transitioned on hover event
const optionBorderStyles = css`
    &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        height: 2px;
        width: 100%;
        background-color: rgb(95, 95, 95);
        visibility: hidden;
        transform: scaleX(0);
        transition: all 0.3s ease-in-out 0s;
    }
`;

// On hover of header option
const optionHoverStyles = css`
    &:hover {
        // Transition opacity of background-gradient so it is visible
        &::before {
            opacity: 1;
            transform: scale(1);
        }

        // Transition pseudo-border, so it is visible with growing animation
        &::after {
            visibility: visible;
            transform: scaleX(1);
        }

        // Unique styles for .option.sign-in-link
        &.sign-in-link {
            color: rgb(107, 180, 107);

            &::after {
                background-color: rgb(107, 180, 107);
            }
        }

        // Unique styles for .option.sign-out-link
        &.sign-out-link {
            color: rgb(236, 114, 114);

            &::after {
                background-color: rgb(236, 114, 114);
            }
        }
    }
`;

// Currently selected header option
const optionSelectedStyles = css`
    &.selected {
        color: rgb(49, 146, 202);
        opacity: 1;

        // Set background image of selected header option to a gradient
        &::before {
            // ... inherits styles from .option::before (above)
            background: linear-gradient(#fff, rgb(228, 227, 227));
            opacity: 0.6;
            transform: scale(1);
        }

        // Make pseudo-border visible for selected header option
        &::after {
            // ... inherits styles from .option::after (above)
            background-color: rgb(49, 146, 202);
            visibility: visible;
            transform: scaleX(1);
        }

        // Unique styles for .selected.sign-in-link
        &.sign-in-link {
            color: rgb(107, 180, 107);

            &::after {
                background-color: rgb(107, 180, 107);
            }
        }

        // On hover of currently selected header option
        &:hover {
            opacity: 0.7;

            &::before {
                opacity: 1;
            }

            &::after {
                opacity: 0.7;
            }
        }
    }
`;

// ---------- Styled Components ----------
export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
`;

export const LogoContainer = styled(NavLink)`
    height: 100%;
    width: 70px;
    padding: 20px;

    .logo {
        transition: all 0.3s;

        &:hover {
            transform: scale(1.05);
        }
    }
`;

export const OptionsContainer = styled.div`
    width: 56%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const OptionLink = styled(NavLink)`
    ${optionContainerStyles}
    ${optionBackgroundStyles}    
    ${optionBorderStyles}    
    ${optionHoverStyles}    
    ${optionSelectedStyles}
`;

// export const OptionSignInLink = styled(NavLink)`
//     ${OptionContainerStyles}
// `;

// export const OptionSignOutDiv;
