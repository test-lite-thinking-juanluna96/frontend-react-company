import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  isAuthenticated: false,
  isAdmin: false,
  user: {
    id: null,
    email: null,
  },
  error: null,
};

const callbackReducer = (builder) => {
  builder
    .addCase("LOGIN_USERS_REQUEST", (state, action) => {
      return {
        ...state,
        loading: true,
      };
    })
    .addCase("LOGIN_USERS_SUCCESS", (state, action) => {
      return {
        ...state,
        token: action.payload.token,
        isAuthenticated: true,
        isAdmin: action.payload.admin,
        user: {
          id: action.payload.id,
          email: action.payload.email,
        },
      };
    })
    .addCase("LOGIN_USERS_FAIL", (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.payload.response.data.message
      };
    })
    .addCase("REGISTER_USERS_REQUEST", (state, action) => {
      return {
        ...state,
        loading: true,
      };
    })
    .addCase("REGISTER_USERS_SUCCESS", (state, action) => {
      return {
        ...state,
        token: action.payload.token,
        isAuthenticated: true,
        isAdmin: action.payload.isAdmin,
        user: {
          id: action.payload.id,
          email: action.payload.email,
        },
      };
    })
    .addCase("REGISTER_USERS_FAIL", (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    });
};

export const userReducer = () => {
  return createReducer(initialState, callbackReducer);
};
