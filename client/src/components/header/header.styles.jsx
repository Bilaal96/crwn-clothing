import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as SvgCrown } from '../../assets/crown.svg';
import { mediaQuery } from '../../config/theme';

/** 
 * NOTE: PageWrapper's padding property must also be 
    considered when adjusting Header height  
 */
export const Header = styled.header`
    position: fixed;
    top: 0;
    z-index: 1;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 7rem;
    padding: 0rem 2.4rem;
    background-color: ${({ theme }) => theme.colors.white};
    border-bottom: 0.3rem solid ${({ theme }) => theme.colors.coral};

    ${mediaQuery.tablet} {
        justify-content: space-between;
        height: 8rem;
        padding: 2rem 4rem 2rem;
    }

    ${mediaQuery.desktop} {
        height: 9rem;
        padding: 3rem 7rem 1rem;
    }
`;

// Wraps Logo in Link - adjust Logo size
export const LogoLink = styled(Link).attrs((props) => ({
    to: '/',
}))`
    flex: 0 0 4rem; /* prevent shrink */
    height: 3.2rem;
    transition: all 0.3s;
    ${mediaQuery.hoverable} {
        &:hover {
            transform: scale(1.05);
        }
    }

    ${mediaQuery.tablet} {
        flex: 0 0 4.4rem; /* prevent shrink */
        height: 3.52rem;
        margin-left: 0.5rem;
        ${mediaQuery.hoverable} {
            &:hover {
                transform: scale(1.05);
            }
        }
    }

    ${mediaQuery.desktop} {
        flex: 0 0 5rem; /* prevent shrink */
        height: 4rem;
        margin-left: 0.3rem;
        ${mediaQuery.hoverable} {
            &:hover {
                transform: scale(1.05);
            }
        }
    }
`;

// Styles SvgCrown as Logo - adjust logo colours
export const Logo = styled(SvgCrown).attrs((props) => ({
    title: 'Crown Clothing Logo',
}))`
    width: 100%;
    height: 100%;

    #Oval {
        fill: ${({ theme }) => theme.colors.pelorous};
    }

    #Triangle {
        fill: ${({ theme }) => theme.colors.pelorous};
        fill-opacity: 0.6;
    }

    #Rectangle {
        fill: ${({ theme }) => theme.colors.charcoal};
        /* opacity: 0.9; */
    }

    ${LogoLink}:active & {
        #Oval {
            fill: ${({ theme }) => theme.colors.coralPink};
        }

        #Triangle {
            fill: ${({ theme }) => theme.colors.coralPink};
            fill-opacity: 0.6;
        }

        #Rectangle {
            fill: ${({ theme }) => theme.colors.charcoal};
            /* opacity: 0.9; */
        }
    }
`;
