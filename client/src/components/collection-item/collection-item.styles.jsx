import styled from 'styled-components/macro';
import mediaQuery from '../../theme/media-queries';

export const CollectionItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    /* Use 100% of parent's width & height */
    width: 100%;
    height: 100%;
    transition: all 0.2s ease;
`;

export const ItemImage = styled.figure`
    /* Relative to  /  center button */
    position: relative;
    display: flex;
    justify-content: center;

    /* Image styles */
    width: 100%; /*100% of Grid cell */
    min-height: 90%; /* 80% of Grid cell */
    background: ${(props) => `url(${props.imageUrl})`};
    background-size: cover;
    background-position: center;
    border-radius: 0.3rem;

    /* button styles */
    button {
        position: absolute;
        bottom: 5%;
        min-width: 80%;
        max-height: 4rem;
        padding: 0.6rem;
        font-size: 1.2rem;
    }

    /* Hoverable Devices */
    ${mediaQuery.hoverable} {
        /* Hide button by default*/
        button {
            opacity: 0;
            transition: all 0.2s ease;
        }

        /* on hover */
        &:hover {
            /* reduce opacity of image */
            opacity: 0.9;
            /* box-shadow: 2px -2px 10px 2px rgba(0, 0, 0, 0.4); */

            /* Show button on hover */
            button {
                opacity: 1;
            }
        }
    }
`;

export const ItemFooter = styled.figcaption`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 20%;
    padding: 1.6rem 1rem 1rem;
`;

export const ItemName = styled.span`
    color: ${({ theme }) => theme.colors.black};
    font-size: 1.4rem;
    font-weight: 600;
    letter-spacing: 0.2rem;
    margin-top: auto;
    margin-bottom: 0.6rem;

    /* Ellipsis */
    /* overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis; */

    ${mediaQuery.hoverable} {
        opacity: 0.75;
        transition: opacity 0.2s ease;

        &:hover {
            /* Show text / remove ellipsis */
            /* overflow: visible;
            white-space: normal;
            text-overflow: unset; */
        }

        ${CollectionItem}:hover & {
            opacity: 1;
        }
    }

    ${mediaQuery.tablet} {
        font-size: 1.6rem;
    }

    ${mediaQuery.laptop} {
        font-size: 1.8rem;
    }
`;

export const ItemPrice = styled.span`
    color: ${({ theme }) => theme.colors.tealGreen};
    font-size: 1.6rem;
    font-weight: 700;
    letter-spacing: 0.2rem;

    ${mediaQuery.tablet} {
        font-size: 1.8rem;
    }

    ${mediaQuery.laptop} {
        font-size: 2rem;
    }

    ${mediaQuery.desktop} {
        font-size: 2.1rem;
    }
`;
