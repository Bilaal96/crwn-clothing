import styled, { css } from 'styled-components';
import { mediaQuery } from '../../config/theme';

export const MenuItem = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.4rem;
    overflow: hidden;
    position: relative;
    transition: all 0.1s ease-out;

    /** Dynamically Set Grid Areas via props
     * For props-value see menu-item.component.jsx 
     * For Grid Container, see grid-template-area in 
       directory.styles.jsx
     */
    ${({ $menuItemTitle }) => css`
        grid-area: ${$menuItemTitle};
    `}

    /* Hoverable devices */
    ${mediaQuery.hoverable} {
        &:hover {
            cursor: pointer;
            box-shadow: 0 0 1.2rem 0.1rem
                ${({ theme }) => theme.colors.charcoal};
        }
    }

    /* Accessibility */
    &:focus {
        outline: 0;
        box-shadow: 0 0 1.2rem 0.1rem ${({ theme }) => theme.colors.charcoal};
    }

    /* Touch devices */
    &:active {
        outline: 0;
        box-shadow: 0 0 1.2rem 0.1rem ${({ theme }) => theme.colors.charcoal};
    }
`;

export const BackgroundImage = styled.div`
    width: 100%;
    height: 100%;
    background-image: ${({ imageUrl }) => `url(${imageUrl})`};
    background-position: center;
    background-size: cover;
    border: 0.1rem solid ${({ theme }) => theme.colors.charcoal};
    border-radius: 0.4rem;

    /* Hoverable devices */
    ${mediaQuery.hoverable} {
        ${MenuItem}:hover & {
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
    background-color: ${({ theme }) => theme.colors.white};
    opacity: 0.8;
    border: 0.1rem solid black;
    border-radius: 0.3rem;
    transition: opacity 0.1s ease-out;

    /* Hoverable devices */
    ${mediaQuery.hoverable} {
        ${MenuItem}:hover & {
            opacity: 0.9;
        }
    }

    /* Accessibility */
    ${MenuItem}:focus & {
        opacity: 0.9;
    }

    /* Touch devices */
    ${MenuItem}:active & {
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
    color: ${({ theme }) => theme.colors.charcoal};

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
    color: ${({ theme }) => theme.colors.pelorous};
    transition: all 0.1s ease-out;

    ${mediaQuery.tablet} {
        font-size: 1.6rem;
    }

    ${mediaQuery.desktop} {
        font-size: 1.7rem;
    }
`;
