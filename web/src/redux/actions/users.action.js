import axios from 'axios';

const url = process.env.REACT_APP_API_URL;

export const loginUsersAction = (user) => async (dispatch) => {
  try {
    dispatch({ type: "LOGIN_USERS_REQUEST" });
    const res = await axios.post(`${url}/login`, user);
    dispatch({ type: "LOGIN_USERS_SUCCESS", payload: res.data });
  } catch (error) {
    dispatch({ type: "LOGIN_USERS_FAIL", payload: error });
  }
};

export const registerUsersAction = (user) => async (dispatch) => {
  try {
    dispatch({ type: "REGISTER_USERS_REQUEST" });
    const res = await axios.post(`${url}/register`, user);
    dispatch({ type: "REGISTER_USERS_SUCCESS", payload: res.data });
  } catch (error) {
    dispatch({ type: "REGISTER_USERS_FAIL", payload: error });
  }
};
