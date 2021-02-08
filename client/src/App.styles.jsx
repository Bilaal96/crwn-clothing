import styled from 'styled-components';

export const colors = {
    primary: '#3192ca',
    secondary: '',
    accent: '',
    emphasise: 'rgb(49, 146, 202)',
    shadow: '#4a4a4a',
};

export const mediaQuery = {
    tablet: '@media (min-width: 650px)',
    desktop: '@media (min-width: 1000px)',
    hoverable: '@media (hover:hover) and (pointer: fine)',
};

export const AppStyles = styled.div`
    margin: 0 2.5rem;

    ${mediaQuery.tablet} {
        margin: 0 4rem;
    }

    ${mediaQuery.desktop} {
        margin: 0 6.5rem;
    }
`;
