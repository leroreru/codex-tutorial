import { configureStore } from "@reduxjs/toolkit";
import userReducers from "../reducer/userReducer";
import productReducers from "../reducer/productReducer";
import productCatReducers from "../reducer/productCatReducer";
import loginReducers from "../reducer/loginReducer";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "@redux-saga/core";
import { combineReducers } from "redux";
import rootSaga from "../saga";

const logger = createLogger();
const saga = createSagaMiddleware();

const reducer = combineReducers({
  userReducers,
  productReducers,
  productCatReducers,
  loginReducers,
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false })
      .concat(logger)
      .concat(saga),
});

saga.run(rootSaga);
export default store;
