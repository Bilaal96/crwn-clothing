import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

// Redux Store Persistor
import { store, persistor } from './redux/store';

// Service Worker for PWA
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

// App.js
import App from './App';

// Side Effect - scrolls to top when location.pathname changes
import ScrollToTop from './components/scroll-to-top/scroll-to-top.component';

// Styled Components
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import GlobalStyle from './theme/global-styles.js';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <ScrollToTop />
                <PersistGate loading={null} persistor={persistor}>
                    <ThemeProvider theme={theme}>
                        <GlobalStyle />
                        <App />
                    </ThemeProvider>
                </PersistGate>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
