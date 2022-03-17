import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import mediaQuery from '../../theme/media-queries';

// Flex Container
export const CollectionPreview = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.1);
    padding: 1.6rem;
    margin-bottom: 1.8rem;
    border-radius: 0.3rem;
    /* box-shadow: 0 0 0.8rem 0.3rem rgba(0, 0, 0, 0.1); */

    ${mediaQuery.tablet} {
        margin-bottom: 2rem;
    }

    ${mediaQuery.laptop} {
        margin-bottom: 2.4rem;
    }

    ${mediaQuery.desktop} {
        padding: 2.4rem 2rem;
        margin-bottom: 2.6rem;
    }
`;

// -- Flex Child 1
export const CollectionPreviewTitle = styled.h2`
    /* font-size: 1.6rem; */
    font-size: ${({ theme: { fontSize } }) => fontSize.h2.xs};
    font-weight: 600;
    margin-bottom: 1.4rem;
    transition: all 0.2s ease;

    ${mediaQuery.mobileLg} {
        /* font-size: 2.2rem; */
        font-size: ${({ theme: { fontSize } }) => fontSize.h2.sm};
        align-self: flex-start;
    }

    ${mediaQuery.tablet} {
        /* font-size: 2.6rem; */
        font-size: ${({ theme: { fontSize } }) => fontSize.h2.md};

        /* Adjust alignment to image */
        margin-bottom: 2rem;
        /* margin-left: 1.8rem; */
    }

    ${mediaQuery.laptop} {
        /* font-size: 2.8rem; */
        font-size: ${({ theme: { fontSize } }) => fontSize.h2.lg};
        margin-bottom: 2.2rem;
        margin-left: 0rem;
    }

    ${mediaQuery.desktop} {
        /* font-size: 3rem; */
        font-size: ${({ theme: { fontSize } }) => fontSize.h2.xl};
        margin-bottom: 2.5rem;
        margin-left: 0rem;
    }
`;

export const CollectionRouterLink = styled(Link)`
    /* --- Default, non-hoverable device --- */
    /* -- position ::before */
    position: relative;
    /* -- position ::after */
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.charcoal};
    padding: 0.2rem 0.2rem 0.2rem 1.5rem;
    /* padding: 0.2rem; */

    /** --- Border-left --- 
     * Visible by default on non-hoverable devices 
    */
    &:before {
        content: '';
        position: absolute;
        left: 0rem;
        width: 0.3rem;
        height: 100%;
        background: ${({ theme }) => theme.colors.pelorous};
        opacity: 1;
    }

    /** --- Right Triangle --- 
     * Flex Item of LinkToCollection 
    */
    &:after {
        content: '';
        width: 0;
        height: 0;
        margin-top: 0rem;
        margin-left: 1.2rem;
        border: 0.7rem solid transparent;
        border-left: 1.4rem solid ${({ theme }) => theme.colors.charcoal};
    }

    /* Device Media Queries */
    ${mediaQuery.mobileLg} {
        /* Space between Text & Border-left */
        padding: 0.2rem 0.2rem 0.2rem 2.1rem;

        /* Border-left size */
        &:before {
            top: 0rem;
            height: 100%;
            opacity: 1;
        }

        /* Right Triangle size */
        &:after {
            margin-top: 0.2rem;
            margin-left: 1.8rem;
            border: 0.9rem solid transparent;
            border-left: 1.6rem solid ${({ theme }) => theme.colors.charcoal};
        }
    }

    ${mediaQuery.tablet} {
        padding: 0.2rem 0.2rem 0.2rem 2.4rem;

        /* Border-left size */
        &:before {
            width: 0.4rem;
        }

        /* Right Triangle size */
        &::after {
            margin-top: 0.3rem;
            margin-left: 2rem;
            border: 1.3rem solid transparent;
            border-left: 2.3rem solid ${({ theme }) => theme.colors.charcoal};
        }
    }

    ${mediaQuery.laptop} {
        padding: 0.2rem 0.2rem 0.2rem 2.4rem;

        /* Border-left size */
        &:before {
            width: 0.6rem;
        }

        /* Right Triangle size */
        &::after {
            margin-top: 0.2rem;
            margin-left: 2.4rem;
            border: 1.3rem solid transparent;
            border-left: 2.3rem solid ${({ theme }) => theme.colors.charcoal};
        }
    }

    ${mediaQuery.desktop} {
        /* padding-left: 2.8rem; */

        /* Right Triangle size */
        &::after {
            margin-top: 0.2rem;
            border: 1.4rem solid transparent;
            border-left: 2.4rem solid ${({ theme }) => theme.colors.charcoal};
        }
    }

    /** Hoverable Devices 
     * Small mobile-width devices will maintain mobile 
       styles (i.e. Border-left is showing by default)

     * From tablet-width devices, the hover transition
       on Title & Border-left is introduced 
        - Padding-left moves Text to right
        - Border-left grows vertically (bottom to top) 
     */
    ${mediaQuery.hoverable} {
        padding: 0.2rem 0.2rem 0.2rem 0.2rem;
        opacity: 0.9;
        transition: all 0.4s ease;

        &::before {
            background: ${({ theme }) => theme.colors.coralLight};
            opacity: 0;
            transform: scaleY(0);
            transform-origin: bottom;
            transition: all 0.3s ease;
        }

        &:hover {
            padding-left: 1.5rem;
            opacity: 1;

            &:before {
                opacity: 1;
                transform: scaleY(1);
            }

            ${mediaQuery.mobileLg} {
                padding-left: 2.1rem;
            }
            ${mediaQuery.tablet} {
                padding-left: 2.4rem;
            }
            ${mediaQuery.laptop} {
                padding-left: 3rem;
            }
            ${mediaQuery.desktop} {
                /* padding-left: 2.8rem; */
            }
        }
    }
`;

export const CollectionName = styled.span`
    & span {
        color: ${({ theme }) => theme.colors.coral};
        transition: color 0.2s ease;

        ${mediaQuery.hoverable} {
            ${CollectionRouterLink}:hover & {
                color: ${({ theme }) => theme.colors.pelorous};
            }
        }

        ${CollectionRouterLink}:active & {
            color: ${({ theme }) => theme.colors.coral};
        }
    }
`;

// -- Flex Child 2
// Grid Container --> Grid Items: CollectionItem
export const PreviewItemsGrid = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: ${({ numOfCols }) =>
        `repeat(${numOfCols}, minmax(20rem, 1fr))`};
    grid-template-rows: 36rem;
    gap: 1rem;
    /* border: 4px solid coral; */

    /* Scrollbar Styles */
    overflow-y: hidden;
    overflow-x: scroll;

    /* Move scrollbar down / make room for overflowing text */
    padding: 2rem 0 4rem;

    /* Scrollbar Firefox */
    scrollbar-color: ${({ theme: { colors } }) =>
        `${colors.mistyBlue} rgba(0, 0, 0, 0.1)`};
    scrollbar-width: thin;

    /* Scrollbar Other */
    &::-webkit-scrollbar {
        background: rgba(0, 0, 0, 0.1);
        border-radius: 1rem;
        height: 0.8rem;
    }

    &::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.colors.mistyBlueLight};
        border-radius: 1rem;

        &:hover {
            background: ${({ theme }) => theme.colors.mistyBlueMedium};
        }

        &:active {
            background: ${({ theme }) => theme.colors.mistyBlue};
        }
    }

    /* Mobile Horizontal */
    ${mediaQuery.mobileLg} {
        grid-template-columns: ${({ numOfCols }) =>
            `repeat(${numOfCols}, minmax(20rem, 1fr))`};
        grid-template-rows: 36rem;
    }

    ${mediaQuery.tablet} {
        grid-template-columns: ${({ numOfCols }) =>
            `repeat(${numOfCols}, minmax(22rem, 1fr))`};
        grid-template-rows: 38rem;
        gap: 1.2rem;
    }

    ${mediaQuery.laptop} {
        grid-template-columns: ${({ numOfCols }) =>
            `repeat(${numOfCols}, minmax(24rem, 1fr))`};
        grid-template-rows: 40rem;
        gap: 1.4rem;
    }

    ${mediaQuery.desktop} {
        grid-template-columns: ${({ numOfCols }) =>
            `repeat(${numOfCols}, minmax(30rem, 1fr))`};
        grid-template-rows: 46rem;
        gap: 1.6rem;
        padding: 2rem 0;
    }

    ${mediaQuery.largeScreen} {
        grid-template-columns: ${({ numOfCols }) =>
            `repeat(${numOfCols}, minmax(34rem, 1fr))`};
        grid-template-rows: minmax(0, 50rem);
    }
`;
