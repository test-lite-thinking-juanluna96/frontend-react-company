import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { companyReducer } from './features/company/companyReducer';

const storeCombination = () => {
    return combineReducers({
        company: companyReducer(),
    });
};

export const store = configureStore({
    reducer: storeCombination(),
    middleware: [
        thunk
    ]
});