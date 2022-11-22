import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  companies: [],
  company: {},
  loading: false,
  error: null,
};

const callbackReducer = (builder) => {
  builder
    .addCase("GET_COMPANIES_SUCCESS", (state, action) => {
      return {
        ...state,
        loading: false,
        companies: action.payload,
      };
    })
    .addCase("GET_COMPANIES_REQUEST", (state, action) => {
      return {
        ...state,
        loading: true,
      };
    })
    .addCase("GET_COMPANIES_FAIL", (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    })
    .addCase("DELETE_COMPANY_REQUEST", (state, action) => {
      return {
        ...state,
        loading: true,
      };
    })
    .addCase("DELETE_COMPANY_SUCCESS", (state, action) => {
      return {
        ...state,
        loading: false,
        companies: state.companies.filter(
          (company) => company.id !== action.payload
        ),
      };
    })
    .addCase("DELETE_COMPANY_FAIL", (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    })
    .addCase("CREATE_COMPANY_REQUEST", (state, action) => {
      return {
        ...state,
        loading: true,
      };
    })
    .addCase("CREATE_COMPANY_SUCCESS", (state, action) => {
      return {
        ...state,
        loading: false,
        companies: [...state.companies, action.payload],
      };
    })
    .addCase("CREATE_COMPANY_FAIL", (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    })
    .addCase("UPDATE_COMPANY_REQUEST", (state, action) => {
      return {
        ...state,
        loading: true,
      };
    })
    .addCase("UPDATE_COMPANY_SUCCESS", (state, action) => {
      return {
        ...state,
        loading: false,
        companies: state.companies.map((company) =>
          company.id === action.payload.id ? action.payload : company
        ),
      };
    })
    .addCase("UPDATE_COMPANY_FAIL", (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    });
};

export const companyReducer = () => {
  return createReducer(initialState, callbackReducer);
};
