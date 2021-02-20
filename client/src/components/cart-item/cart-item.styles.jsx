import styled from 'styled-components';
import { mediaQuery } from '../../config/theme';

export const CartItem = styled.div`
    display: flex;
    width: 100%;
    height: 10rem;
    margin-bottom: 1rem;

    &:last-child {
        margin-bottom: 0;
    }

    ${mediaQuery.tablet} {
        height: 12rem;
    }

    ${mediaQuery.desktop} {
        height: 14rem;
    }
`;

export const ItemImage = styled.img`
    width: 38%;
    border-radius: 0.2rem;

    ${mediaQuery.tablet} {
        width: 40%;
    }

    ${mediaQuery.desktop} {
        width: 42%;
    }
`;

export const ItemDetails = styled.div`
    width: 62%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-start;
    padding: 1rem 1.6rem;
    font-size: 1.2rem;

    ${mediaQuery.tablet} {
        width: 60%;
        font-size: 1.4rem;
        padding: 1rem 1.8rem;
    }

    ${mediaQuery.desktop} {
        width: 62%;
        font-size: 1.6rem;
        padding: 1rem 2rem;
    }
`;

export const ItemName = styled.span`
    color: ${({ theme }) => theme.colors.charcoal};
    font-weight: 800;

    ${mediaQuery.tablet} {
        font-weight: 700;
    }

    ${mediaQuery.desktop} {
        font-weight: 700;
    }
`;

export const ItemPrice = styled.span`
    color: ${({ theme }) => theme.colors.pelorous};
    font-weight: 700;
    margin-top: 0.6rem;

    ${mediaQuery.tablet} {
        font-weight: 600;
        margin-top: 0.8rem;
    }

    ${mediaQuery.desktop} {
        font-weight: 600;
    }
`;
