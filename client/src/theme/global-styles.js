import { createGlobalStyle } from 'styled-components/macro';

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

    ${'' /* REVIEW use of wf-loading className */}
    html.wf-loading * {
        opacity: 0;
    }

    body {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-family: 'Open Sans', sans-serif;

        ${'' /* Fallback background (if gradient is used) */}
        background: ${({ theme }) => theme.colors.ivory};

         /* ----- Experimental ----- */
        ${'' /* Teal to White */}
        ${
            '' /* background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 1) 18%,
            rgba(66, 151, 160, 1) 78%
        );  */
        }

        ${'' /* White to Teal to White */}
         ${
             '' /* background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 1) 0%,
            rgba(66, 151, 160, 1) 49%,
            rgba(255, 255, 255, 1) 100%
        );  */
         }
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
