/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom'

// import Routes from 'app/routes';

function App() {
    return (
        <BrowserRouter>
            <Helmet
                titleTemplate="%s | Sample Redux"
                defaultTitle="Sample Redux"
                htmlAttributes={{ }}
            >
                <meta name="description" content="Sample Redux" />
            </Helmet>
            {/* <Routes /> */}
        </BrowserRouter>
    );
}
export default App;