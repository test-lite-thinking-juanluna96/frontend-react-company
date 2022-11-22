import axios from "axios";

const url = process.env.REACT_APP_API_URL;

export const getCompaniesAction = () => async (dispatch) => {
  try {
    dispatch({ type: "GET_COMPANIES_REQUEST" });
    const res = await axios.get(`${url}/companies`);
    dispatch({ type: "GET_COMPANIES_SUCCESS", payload: res.data });
  } catch (error) {
    dispatch({ type: "GET_COMPANIES_FAIL", payload: error });
  }
};

export const deleteCompanyAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: "DELETE_COMPANY_REQUEST" });
    await axios.delete(`${url}/companies/${id}`);
    dispatch({ type: "DELETE_COMPANY_SUCCESS", payload: id });
  } catch (error) {
    dispatch({ type: "DELETE_COMPANY_FAIL", payload: error });
  }
};

export const createCompanyAction = (company) => async (dispatch) => {
  try {
    dispatch({ type: "CREATE_COMPANY_REQUEST" });
    const res = await axios.post(`${url}/companies`, company);
    dispatch({ type: "CREATE_COMPANY_SUCCESS", payload: res.data });
  } catch (error) {
    dispatch({ type: "CREATE_COMPANY_FAIL", payload: error });
  }
};

export const updateCompanyAction = (company) => async (dispatch) => {
  try {
    dispatch({ type: "UPDATE_COMPANY_REQUEST" });
    const res = await axios.put(`${url}/companies/${company.id}`, company);
    dispatch({ type: "UPDATE_COMPANY_SUCCESS", payload: res.data });
  } catch (error) {
    dispatch({ type: "UPDATE_COMPANY_FAIL", payload: error });
  }
};
