import styled from 'styled-components/macro';
import mediaQuery from '../../theme/media-queries';

/** 
 * Utilities
    - allow application of reusable styles
    - can be referenced in styled-components below
      via nesting in parent / ancestor elements 
    
 * ItemDetail - Wrapper for Label-Value pairs
*/
export const ItemDetail = styled.div`
    max-width: 300px;
    height: max-content;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    grid-column: 1 / span 2;

    ${mediaQuery.mobileLg} {
        grid-template-columns: 1fr;
    }

    ${mediaQuery.tablet} {
        /* Second-last child */
        :nth-last-child(2) {
            grid-column: 1 / 2;
        }

        /* Last child --> SubTotal component */
        :nth-last-child(1) {
            grid-column: 2 / 3;
            padding-right: 2rem;
        }
    }
`;

// -- Label - Precedes information about a product
export const Label = styled.div`
    margin-bottom: 0.4rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.charcoal};
    letter-spacing: 0.1rem;
    height: max-content;

    .sub-label {
        font-size: 1rem;
        font-weight: normal;

        ${mediaQuery.tablet} {
            font-size: 1.2rem;
        }

        ${mediaQuery.laptop} {
            font-size: 1.4rem;
        }
    }

    ${mediaQuery.laptop} {
        letter-spacing: 0.15rem;
    }
`;

// -- Value - Product information - Usually paired with Label
export const Value = styled.div`
    justify-self: center;
    text-align: center;
    font-weight: bold;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.greenHaze};
    height: max-content;

    ${mediaQuery.mobileLg} {
        justify-self: normal;
        text-align: left;
    }
`;

/** 
 * CheckoutItem - a wrapper component
 * Has 3 immediate children:
    - RemoveButtonContainer 
    - ImageContainer 
    - ProductDetails

 * Each of these components have their own children
 *  which detail information about a CheckoutItem
*/
export const CheckoutItem = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 10rem;
    padding: 1rem 0;
    border-bottom: 0.1rem solid darkgrey;
    font-size: clamp(1.4rem, 2vw, 1.6rem);

    ${mediaQuery.mobileLg} {
        flex-direction: row;
    }

    ${mediaQuery.desktop} {
        padding: 1.6rem 0;
    }
`;

// RemoveButtonContainer
// -- Container that positions RemoveButton
export const RemoveButtonContainer = styled.div`
    /* Position relative to CheckoutItem (see above) */
    position: absolute;
    top: 2.8rem;
    right: 2rem;
    display: flex;
    align-items: center;

    ${mediaQuery.mobileLg} {
        top: 2rem;
    }
`;

// -- RemoveButton with hover transitions
export const RemoveButton = styled.button`
    /* Center Child (i.e. RemoveIcon) */
    display: flex;
    justify-content: center;
    align-items: center;

    /* Circle Button */
    width: 2.4rem;
    height: 2.4rem;
    border-radius: 50%;
    border: none;
    background-color: white;
    cursor: pointer;

    z-index: 5;
    transition: all 0.2s ease;

    /* Text, transitions on hover */
    &::before {
        display: none;
        position: absolute;
        left: -7rem;
        content: 'REMOVE';
        margin-right: 1rem;
        font-size: 1.2rem;
        font-weight: 600;
        letter-spacing: 0.15rem;
        color: red;

        /* Prep transition */
        opacity: 0;
        transform: translateY(100%);
        transition: all 0.3s ease;
        pointer-events: none; /* make ::before non-clickable */

        ${mediaQuery.tablet} {
            display: inline;
        }
    }

    /* Touch Device Feedback */
    &:active {
        background-color: #ddd;
    }

    /* Hoverable Device Feedback */
    ${mediaQuery.hoverable} {
        &:hover {
            background-color: #ddd;

            /* Text Transition */
            &::before {
                opacity: 1;
                transform: translateY(0%);
            }
        }

        /* Click Feedback */
        &:active {
            outline: 0;
            background-color: rgba(0, 0, 0, 0.2);
        }
    }
`;

// -- RemoveIcon - X symbol for "close"
export const RemoveIcon = styled.span`
    font-size: 1.4rem;
    font-weight: bold;
    color: red;
    color: rgb(201, 36, 36);

    ${RemoveButton}:hover & {
        color: red;
    }

    ${mediaQuery.tablet} {
        font-size: 1.6rem;
    }

    ${mediaQuery.desktop} {
        font-size: 1.8rem;
    }
`;

// ImageContainer
export const ImageContainer = styled.div`
    justify-self: center;
    align-self: center;
    width: 100%;

    img {
        width: 100%;
        min-width: 120px;
        border-radius: 0.2rem;
    }

    ${mediaQuery.mobileLg} {
        width: 100%;
    }

    ${mediaQuery.tablet} {
        padding-right: 1.5rem;
        width: 40%;
    }

    ${mediaQuery.laptop} {
        width: 70%;
    }

    ${mediaQuery.desktop} {
        width: 50%;
    }
`;

// ProductDetails
export const ProductDetails = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;

    width: 100%;
    padding: 1rem 1rem 0.4rem;

    ${mediaQuery.tablet} {
        grid-template-columns: repeat(2, 1fr);
        padding: 1rem 0;
    }

    ${mediaQuery.laptop} {
        gap: 2rem;
    }
`;

// -- Children
export const Name = styled(ItemDetail)``;

export const SingleItemPrice = styled(ItemDetail)``;

export const Quantity = styled(ItemDetail)`
    ${Value} {
        /* Center arrows & item-count */
        display: flex;
        align-items: center;

        /* arrows */
        .arrow {
            font-size: 1.8rem;
            color: #aaa;
            cursor: pointer;
            transition: all 0.2s ease;

            &.arrow-left {
                transform-origin: right;
            }

            &.arrow-right {
                transform-origin: left;
            }

            ${mediaQuery.hoverable} {
                &:hover {
                    color: rgb(80, 80, 80);
                    transform: scale(1.15);
                }
            }

            &:active {
                color: rgb(80, 80, 80);
            }

            ${mediaQuery.desktop} {
                font-size: 2.1rem;
            }

            ${mediaQuery.largeScreen} {
                font-size: 2.4rem;
            }
        }

        /* item-count */
        .item-count {
            margin: 0 1rem;
            width: auto;
        }
    }
`;

export const SubTotal = styled(ItemDetail)`
    ${mediaQuery.tablet} {
        ${Label}, ${Value} {
            text-align: right;
        }
    }
`;
