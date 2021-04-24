import { createGlobalStyle } from 'styled-components/macro';
import mediaQuery from './media-queries';

const GlobalStyle = createGlobalStyle`
    /* CSS Reset */
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;

        /* Scrollbar Styles */
        /* Firefox */
        scrollbar-color: #ccc #eee;
        scrollbar-width: thin;
    }

    :root {
        font-size: 62.5%;

        ${'' /* For Testing REM units scaling */}
        ${'' /* font-size: 16px; */}
    }

    body {
        /* Fallback Background Color */
        background: ${({ theme }) => theme.colors.ivory};
        
        /* LESS DOTS: https://doodad.dev/pattern-generator?share=stripes-6-255_127_80_1-49_145_202_1-244_234_230_1-40-135-2-1-0-0-0-0-0-0-0 */ 
        /* MORE DOTS: https://doodad.dev/pattern-generator?share=stripes-8-255_127_80_1-49_145_202_1-244_234_230_1-40-135-2-1-0-0-0-0-0-0-0 */
        background:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Cdefs%3E%3Cpattern id='pattern' width='40' height='40' viewBox='0 0 40 40' patternUnits='userSpaceOnUse' patternTransform='rotate(135)'%3E%3Crect id='pattern-background' width='400%25' height='400%25' fill='rgba(244, 234, 230,1)'%3E%3C/rect%3E%3Ccircle fill='rgba(255, 127, 80,1)' cx='0' cy='20' r='1'%3E%3C/circle%3E%3Ccircle fill='rgba(255, 127, 80,1)' cx='40' cy='20' r='1'%3E%3C/circle%3E%3Cpath fill='rgba(49, 145, 202,1)' d='m 19.5 19.5 h1 v1 h-1z'%3E%3C/path%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23pattern)' height='100%25' width='100%25'%3E%3C/rect%3E%3C/svg%3E");

        height: 100vh;
        font-family: 'Open Sans', sans-serif;

        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.black};

        &:visited {
            text-decoration: none;
        }
    }

    .disable-scroll {
        height: 100vh;
        overflow: hidden;
    } 
     

    .resize-animation-stopper * {
        animation: none !important;
        transition: none !important;
    }
`;

export default GlobalStyle;
