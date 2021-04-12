import styled from 'styled-components/macro';
import mediaQuery from '../../theme/media-queries';
import { ReactComponent as InfoIconSvg } from '../../assets/info.svg';

// Styled SVG Information Icon
export const InfoIcon = styled(InfoIconSvg)`
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background-color: white;
    fill: ${({ theme }) => theme.colors.pelorous};
`;

// Stripe Test Credit Card Details
export const StripeTestWarning = styled.div`
    font-size: clamp(1.2rem, 2vw, 1.4rem);
    color: ${({ theme }) => theme.colors.warningText};
    background-color: ${({ theme }) => theme.colors.warningBg};
    padding: 1.6rem;
    margin-bottom: 2rem;
    border-radius: 0.4rem;
`;

// -- Children
export const WarningHeader = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 1px solid ${({ theme }) => theme.colors.warningText};
    padding-bottom: 1rem;
    margin-bottom: 1rem;

    .info-icon-container {
        padding: 1rem;
        padding-left: 0rem;
    }

    p {
        font-weight: bold;
        margin-bottom: 0rem;
    }

    ${mediaQuery.laptop} {
        flex-direction: column;

        .info-icon-container {
            align-self: flex-start;
        }
    }

    ${mediaQuery.desktop} {
        flex-direction: row;
    }
`;

export const TestCardDetails = styled.ul`
    list-style: none;

    li {
        display: flex;
        justify-content: space-between;
        padding: 0 0.8rem 0.5rem;
        margin-bottom: 0.5rem;
        border-bottom: 1px dotted ${({ theme }) => theme.colors.warningText};

        .detail {
            width: 30%;
            padding-right: 1rem;
        }

        .value {
            min-width: 70%;
            text-align: right;
            font-weight: 600;
        }
    }
`;

// Checkout Total
export const TotalPrice = styled.div`
    font-size: 2.1rem;
    font-weight: bold;
    padding: 1rem 0;
    margin: 1rem 0;
    border-top: 2px solid ${({ theme }) => theme.colors.greenHaze};
    text-align: right;

    .label {
        color: ${({ theme }) => theme.colors.charcoal};
        margin-right: 1rem;
    }

    .value {
        color: ${({ theme }) => theme.colors.greenHaze};
        margin-right: 0.4rem;
    }
`;

// Stripe Payment Button
export const PayButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 2rem;
    width: 100%;

    button.custom-pay-btn {
        width: 100%;
        background-color: ${({ theme }) => theme.colors.pelorous};

        &:hover {
            color: ${({ theme }) => theme.colors.pelorous};
            background-color: ${({ theme }) => theme.colors.white};
            border-color: ${({ theme }) => theme.colors.pelorous};
        }
    }
`;
