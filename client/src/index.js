import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

// Redux Store Persistor
import { store, persistor } from './redux/store';

// App.js
import App from './App';

// Styled Components
import { ThemeProvider } from 'styled-components';
import theme from './config/theme';
import GlobalStyle from './global-styles.js';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
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
