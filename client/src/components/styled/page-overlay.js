import styled from 'styled-components/macro';
import mediaQuery from '../../theme/media-queries';

// Conditionally rendered when SideNav is toggled
const PageOverlay = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: -10rem;
    left: 0;
    background-color: ${({ theme }) => theme.colors.overlay};
    cursor: pointer;
    z-index: 10;

    ${mediaQuery.desktop} {
        display: none;
    }
`;

export default PageOverlay;
