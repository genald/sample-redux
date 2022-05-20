import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useInjectReducer, useInjectSaga } from '../../store/reduxInjectors';
import { saga } from './saga';
import { key, reducer, samplePageActions, selectSamplePage } from './slice';

const SamplePage = () => {
    useInjectReducer({ key, reducer });
    useInjectSaga({ key, saga });

    const [loadingUser, setLoadingUser] = useState(false);
    const samplePage = useSelector(selectSamplePage);

    const dispatch = useDispatch();

    useEffect(() => {
        setLoadingUser(true);
        dispatch(samplePageActions.getUsers());
    }, [])

    useEffect(() => {
        if (samplePage.users !== undefined) {
            setLoadingUser(false);
        }
    }, [samplePage.users])

    return loadingUser ? <>Loading</>: <>{samplePage.users}</>
    // <input value = {name} />
    // <input value = {email} />
    // <button onClick = {
    //     () => dispatch(samplePageActions.createUser({name, email}))
    // }>Create User</button>
}

export default SamplePage;