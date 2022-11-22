import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { companyReducer } from './features/company/companyReducer';
import { userReducer } from './features/user/userReducer';

const storeCombination = () => {
    return combineReducers({
        company: companyReducer(),
        user: userReducer(),
    });
};

export const store = configureStore({
    reducer: storeCombination(),
    middleware: [
        thunk
    ]
});