import { PayloadAction } from '@reduxjs/toolkit';
import { delay, call, put, takeLatest } from 'redux-saga/effects';
import { USER, USER_BY_ID } from '../api';
import { samplePageActions } from './slice';
import { User } from './type';

function* createUser(action: PayloadAction<User>) {
    yield delay(1000);
    
    try {
        let user = action.payload;
        let url  = USER;
        
        const options = {
            method : "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body   : JSON.stringify(user)
        }
        let response = yield call(fetch, url, options);
        // yield put(samplePageActions.createUserResult(response))
    } catch (err) {
        // handle error here
        // yield put(samplePageActions.createUserResult(err))
    }
}

function* getUsers() {
    yield delay(1000);
    
    try {
        let url = USER;
        
        const options = {
            method : "GET",
            headers: {}
        }
        const response = yield call(fetch, url, options);
        const users    = yield call(response.json);
        yield put(samplePageActions.loadUsers(users));
    } catch (err) {
        // handle error here
    }
}

export function* saga() {
    yield takeLatest(samplePageActions.getUsers.type, getUsers)
    yield takeLatest(samplePageActions.createUser.type, createUser)
}