/**
 * Create the store with dynamic reducers
 */

import { configureStore } from '@reduxjs/toolkit';
import { createInjectorsEnhancer } from 'redux-injectors';
import createSagaMiddleware from 'redux-saga';
import createOidcMiddleware, { loadUser } from 'redux-oidc';

import { createReducer } from './reducers';
// import userManager from '../auth/userManager';

export function configureAppStore() {
    const reduxSagaMonitorOptions = {};
    const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
    const { run: runSaga } = sagaMiddleware;
    // const oidcMiddleware = createOidcMiddleware(userManager);

    // Create the store with saga middleware
    const middlewares = [
        // oidcMiddleware,
        sagaMiddleware
    ];

    const enhancers = [
        createInjectorsEnhancer({
            createReducer,
            runSaga,
        }),
    ];

    const store = configureStore({
        reducer: createReducer(),
        middleware: (getDefaultMiddleware) => [
            ...getDefaultMiddleware({
                serializableCheck: false,
            }),
            ...middlewares,
        ],
        devTools: process.env.NODE_ENV !== 'production',
        enhancers,
    });
    // loadUser(store, userManager);

    return store;
}
