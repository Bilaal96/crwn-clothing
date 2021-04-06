import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import mediaQuery from '../../theme/media-queries';

/** 
 * ----- CustomNavLink -----
 * To make it easier to find the targeted styles 
 * CustomNavLink has been broken down into multiple 
 * functions that:
    - accept props to access the styled-components theme
    - return specific styles using styled-components css-helper

 * --- MOBILE NAVLINKS ---
 * All links are of the same width, except the ".selected" link; 
    which is slightly larger

 * The Sign-in & Sign-out links have unique colors to express 
    their purpose - all other links share the same styles
 */
const mobileLinkStyles = ({ theme: { colors } }) => css`
    /* Non-active link styles */
    width: 76%;
    padding: 0.8rem 1.2rem;
    margin: 1.2rem 0rem;
    font-size: 1.6rem;
    border-radius: 0.3rem;
    color: ${colors.ivory};
    background: ${colors.mistyBlue};

    /* Device-specific Media Queries INHERIT the following Styles */
    text-align: center;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.1s ease;

    /* Hoverable Device */
    ${mediaQuery.hoverable} {
        &:hover {
            width: 78%;
            color: ${colors.white};
            opacity: 0.85;
        }
    }

    /* Accessibility */
    &:focus {
        outline: none;
        box-shadow: 0 0 0.4rem 0.2rem ${colors.black};
    }

    /* Currently selected link */
    &.selected {
        width: 84%;
        background: ${colors.coralLight};
        color: ${({ theme }) => theme.colors.white};
        opacity: 0.9;
        transition: all 0.1s ease;

        ${mediaQuery.hoverable} {
            &:hover {
                width: 86%;
                opacity: 0.85;
            }
        }
    }

    &:active {
        /* Remove focus when link is active */
        outline: none;
        box-shadow: none;

        /* Mobile Touch / Click feedback */
        opacity: 1;
        background: ${colors.coralPink};
    }
`;

const mobileSignInLinkStyles = ({ theme: { colors } }) => css`
    background: ${colors.mediumSeaGreen};

    &.selected {
        background: ${colors.mediumSeaGreen};
    }

    ${mediaQuery.hoverable} {
        &:hover {
            background: ${colors.lightCharcoal};
            opacity: 1;
        }
    }

    /* Mobile Touch / Click feedback */
    &:active {
        background: ${colors.bahamaBlue};
    }
`;

const mobileSignOutLinkStyles = ({ theme: { colors } }) => css`
    background: ${colors.geraldine};

    ${mediaQuery.hoverable} {
        &:hover {
            background: ${colors.lightCharcoal};
            opacity: 1;
        }
    }

    /* Mobile Touch / Click feedback */
    &:active {
        background: ${colors.coralPink};
    }
`;

/**
 * --- DESKTOP NAVLINKS ---
 * A desktop navlinks' default state is simply colored text 
    with opacity < 1
 * When a link is hovered over:
    - opacity is increased
    - a background & border transition in

 * The ".selected" link's text & border color is "pelourous" (blue)
    so that it is obvious which page is currently presented to UA

 * Just like the navlinks for Mobile, the Sign-in & Sign-out links
    have unique text & border colors to better express their purpose 
 */
const desktopLinkStyles = ({ theme: { colors } }) => css`
    /* RESET Mobile Styles */
    width: unset;
    padding: 1rem 1.5rem;
    margin: 0 0.6rem;
    font-size: 1.6rem;
    background: unset;
    color: ${colors.lightCharcoal};

    /* Desktop-only Styles */
    position: relative;
    white-space: nowrap; /* Prevent text-wrapping */
    opacity: 0.6;
    transition: all 0.3s ease;

    /* Animated Underline - visible on hover */
    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 0.2rem;
        background: ${colors.lightCharcoal};
        transform: scaleX(0);
        transform-origin: center;
        transition: background 0.3s ease, opacity 0.3s ease, transform 0.3s ease;
        z-index: -1;
    }

    /* Selected NavLink */
    &.selected {
        /* RESET Mobile Styles */
        width: unset;
        background: unset;
        color: ${colors.pelorous};
        opacity: 0.8;
        box-shadow: none;
        transition: all 0.3s ease;

        /* Desktop-only Styles */
        /* Animated Underline */
        &::after {
            background: ${colors.pelorous};
            transform: scaleX(1);
        }

        /* Hovered ".selected" NavLink */
        ${mediaQuery.hoverable} {
            &:hover {
                width: unset;
                color: ${colors.pelorous};
                opacity: 1;
                box-shadow: unset;

                &::after {
                    background: ${colors.pelorous};
                }
            }
        }
    }

    /* Hovered NavLink */
    ${mediaQuery.hoverable} {
        &:hover {
            width: unset;
            color: ${colors.lightCharcoal};
            opacity: 0.7;

            /* Animate Underline on ::after pseudo-element */
            &::after {
                transform: scaleX(1);
            }
        }
    }

    /* Accessibility */
    &:focus {
        outline: none;
        box-shadow: 0 0 0.4rem 0.2rem ${colors.black};
        border-radius: 0rem;
    }

    /* Active NavLinks */
    &:active,
    &:active:focus {
        /* Remove mobile background styles */
        background: unset;

        /* Remove focus styles on clicks */
        outline: none;
        box-shadow: none;
    }
`;

const desktopSignInLinkStyles = ({ theme: { colors } }) => css`
    background: unset;
    color: ${colors.lightCharcoal};

    /* Selected Sign-in Link */
    &.selected {
        color: ${colors.mediumSeaGreen};

        &::after {
            background: ${colors.mediumSeaGreen};
        }

        /* Override Mobile Hover Styles */
        ${mediaQuery.hoverable} {
            &:hover {
                color: ${colors.mediumSeaGreen};

                &::after {
                    background: ${colors.mediumSeaGreen};
                }
            }
        }
    }

    /* Hovered Sign-in Link */
    &:hover {
        background: unset;
        color: ${colors.lightCharcoal};

        &::after {
            background: ${colors.lightCharcoal};
        }
    }
`;

const desktopSignOutLinkStyles = ({ theme: { colors } }) => css`
    background: unset;
    color: ${colors.lightCharcoal};

    /* Hovered Sign-out Link */
    ${mediaQuery.hoverable} {
        &:hover {
            background: unset;
            color: ${colors.geraldine};

            &::after {
                background: ${colors.geraldine};
            }
        }
    }
`;

export const CustomNavLink = styled(NavLink)`
    /* ----- MOBILE -----  */
    ${mobileLinkStyles}

    /* Mobile Sign-in / Sign-out Link Styles */
    ${(props) => props.$signIn && mobileSignInLinkStyles(props)}
    ${(props) => props.$signOut && mobileSignOutLinkStyles(props)}

    /* ----- TABLET ----- */
    ${mediaQuery.tablet} {
    }

    /* ----- DESKTOP ----- */
    ${mediaQuery.desktop} {
        ${desktopLinkStyles}

        /* Desktop Sign-in / Sign-out Link Styles */
        ${(props) => props.$signIn && desktopSignInLinkStyles(props)}
        ${(props) => props.$signOut && desktopSignOutLinkStyles(props)}
    }
`;
