import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './root-reducer';
import rootSaga from './root-saga';

// App Middlewares
const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

// Dev Middlewares
if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

// Enable Redux DevTools Extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create Store
export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middlewares))
);

// Ensure all Sagas are listening of their respective Actions
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default { store, persistor };
