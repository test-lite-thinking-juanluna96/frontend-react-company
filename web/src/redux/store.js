import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import { companyReducer } from "./features/company/companyReducer";
import { userReducer } from "./features/user/userReducer";

const storeCombination = () => {
  return combineReducers({
    company: companyReducer(),
    user: userReducer(),
  });
};

export const reduxPersist = persistReducer(
  {
    key: "root",
    storage,
    whitelist: ["user"],
  },
  storeCombination()
);

export const store = configureStore({
  reducer: reduxPersist,
  middleware: [thunk],
});

export const persist = persistStore(store);
