import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

import { configureAppStore } from './store/configureStore';
import { HelmetProvider } from 'react-helmet-async';

const store = configureAppStore();
const MOUNT_NODE = document.getElementById('root') as HTMLElement;

ReactDOM.render(
    <Provider store={store}>
        <HelmetProvider>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </HelmetProvider>
    </Provider>,
    MOUNT_NODE,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
