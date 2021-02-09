// REVIEW
// ! Set grid area dynamically through props or attributes
import styled from 'styled-components';
import { mediaQuery, colors } from '../../App.styles';

export const MenuItemContainer = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    overflow: hidden;
    position: relative;
    transition: all 0.1s ease-out;

    /** Set Grid Areas 
     * See grid-template-area in directory.styles.jsx
     */
    &.hats {
        grid-area: hats;
    }

    &.jackets {
        grid-area: jackets;
    }

    &.footwear {
        grid-area: footwear;
    }

    &.womens {
        grid-area: womens;
    }

    &.mens {
        grid-area: mens;
    }

    /* Hoverable devices */
    ${mediaQuery.hoverable} {
        &:hover {
            cursor: pointer;
            box-shadow: 0 0 1.2rem 0.1rem ${colors.shadow};
        }
    }

    /* Touch devices */
    &:active {
        box-shadow: 0 0 1.2rem 0.1rem ${colors.shadow};
    }
`;

export const BackgroundImage = styled.div`
    width: 100%;
    height: 100%;
    background-image: ${(props) => `url(${props.imageUrl})`};
    background-position: center;
    background-size: cover;
    border: 1px solid #4a4a4a;
    border-radius: 4px;

    /* Hoverable devices */
    ${mediaQuery.hoverable} {
        ${MenuItemContainer}:hover & {
            /* Scale img on hover, then snap back to original size */
            transition: transform 5s cubic-bezier(0.25, 0.45, 0.45, 0.95);
            transform: scale(1.1);
        }
    }
`;

export const Content = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1.2rem 1.4rem;
    background-color: white;
    opacity: 0.8;
    border: 1px solid black;
    border-radius: 3px;
    transition: opacity 0.1s ease-out;

    /* Hoverable devices */
    ${mediaQuery.hoverable} {
        ${MenuItemContainer}:hover & {
            opacity: 0.9;
        }
    }

    /* Touch devices */
    &:active {
        transition: opacity 0.1s ease-out;
        opacity: 0.9;
    }

    ${mediaQuery.tablet} {
        opacity: 0.75;
        padding: 1.4rem 1.8rem;
    }

    ${mediaQuery.desktop} {
        opacity: 0.75;
        padding: 1.8rem 2.2rem;
    }
`;

export const Title = styled.h1`
    font-size: 1.8rem;
    padding: 0rem 1rem;
    margin-bottom: 0.4rem;
    color: #4a4a4a;

    ${mediaQuery.tablet} {
        font-size: 2rem;
        margin-bottom: 0.6rem;
    }

    ${mediaQuery.desktop} {
        font-size: 2.2rem;
    }
`;

export const Subtitle = styled.p`
    font-size: 1.4rem;
    font-weight: bold;
    color: ${colors.emphasise};
    transition: all 0.1s ease-out;

    ${mediaQuery.tablet} {
        font-size: 1.6rem;
    }

    ${mediaQuery.desktop} {
        font-size: 1.7rem;
    }
`;
