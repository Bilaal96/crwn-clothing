import styled from 'styled-components';

// Overlay ensures that spinner is always centered
export const SpinnerOverlay = styled.div`
    height: 70vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

// SpinnerContainer renders the actual spinner icon and animates it
export const Spinner = styled.div`
    display: inline-block;
    width: 5rem;
    height: 5rem;
    border: 0.3rem solid rgba(195, 195, 195, 0.6);
    border-radius: 50%;
    border-top-color: #636767;
    animation: spin 1s ease-in-out infinite;
    -webkit-animation: spin 1s ease-in-out infinite;

    @keyframes spin {
        to {
            -webkit-transform: rotate(360deg);
        }
    }

    @-webkit-keyframes spin {
        to {
            -webkit-transform: rotate(360deg);
        }
    }
`;
