import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import ROOT_REDUCERS from "./rootReducers";
import logger from "redux-logger";

const STORE = configureStore({
  reducer: ROOT_REDUCERS,
  middleware: [...getDefaultMiddleware(), logger],
});

export default STORE;
