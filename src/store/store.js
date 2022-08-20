import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import usersSlice from "./usersSlice";
import { bootcampsApi } from "../services/users";

const rootReducer = combineReducers({
  users: usersSlice,
  [bootcampsApi.reducerPath]: bootcampsApi.reducer,
});
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(bootcampsApi.middleware)
      .concat(sagaMiddleware),
});

export default store;
