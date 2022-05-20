import createSlice from "../../store/createSlice";
import { RootState } from '../../store/rootState';
import { initialState, User } from "./type";
import { PayloadAction, createSelector }  from '@reduxjs/toolkit';

// Create Slice
const samplePageSlice = createSlice({
    name: 'samplePage',
    initialState,
    reducers: {
        getUsers(state) {},
        loadUsers(state, action: PayloadAction<User[]>) {
            state.users = action.payload
        },
        createUser(state, action: PayloadAction<User>) {}
    }
})

export const {
    actions: samplePageActions,
    reducer,
    name: key,
} = samplePageSlice

// Create Selector
const selectDomain = (state: RootState) => state.samplePage || initialState
export const selectSamplePage = createSelector(
    [selectDomain], state => state,
);