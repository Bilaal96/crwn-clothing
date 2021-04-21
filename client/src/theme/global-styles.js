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
        background: ${({ theme }) => theme.colors.ivory};
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
