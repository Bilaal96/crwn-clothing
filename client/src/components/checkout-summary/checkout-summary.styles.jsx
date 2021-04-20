import styled from 'styled-components/macro';
import mediaQuery from '../../theme/media-queries';

export const CheckoutSummary = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

/** 
 * SummaryHeader 
 * Mobile view displays:
    - # of cartItems
    - cartTotal
    
 * Tablet & larger screens display ONLY:
    - # of cartItems
*/
export const SummaryHeader = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 1rem 1.4rem;
    font-size: 1.4rem;
    font-weight: 600;
    letter-spacing: 0.05rem;
    color: white;
    background-color: ${({ theme }) => theme.colors.bahamaBlue};
    border-radius: 0.2rem;

    div.checkout-item-count > .label,
    div.checkout-total > .label {
        margin-right: 0.25em;
    }

    div.checkout-item-count > .value,
    div.checkout-total > .value {
        color: lightblue;
    }

    ${mediaQuery.tablet} {
        font-size: 1.6rem;
    }

    ${mediaQuery.laptop} {
        font-size: 1.8rem;
    }

    ${mediaQuery.desktop} {
        .checkout-total {
            display: none;
        }
    }
`;

// Displayed when no items in Cart
export const EmptyCheckout = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    ${mediaQuery.desktop} {
        min-height: 303px;
    }

    p {
        font-size: clamp(1.8rem, 2vw, 2.4rem);
        font-weight: 600;
        margin: 10rem 0;
        letter-spacing: 0.2rem;
        text-align: center;
    }
`;
