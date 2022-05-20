import { memo }                     from 'react';
import { useSelector }              from 'react-redux';
import { Routes as Switch, Route }  from 'react-router-dom';
import SamplePage from "./SamplePage"

const Routes = memo(() => {
    return(
        <Switch>
            <Route path="/" element={<SamplePage/>}/>
        </Switch>
    )
});

export default Routes;