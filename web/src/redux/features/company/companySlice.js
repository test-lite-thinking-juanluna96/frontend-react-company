import {
    createSlice
} from '@reduxjs/toolkit';

const initialState = {
    companies: [],
    company: {},
    loading: false,
    error: null,
};

const url = process.env.REACT_APP_API_URL;

const companySlice = createSlice({
    name: 'company',
    initialState,
    reducers: {
         
        }
    }
);


export default companySlice.reducer;