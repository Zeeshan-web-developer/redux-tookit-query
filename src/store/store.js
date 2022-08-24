import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { bootcampsApi } from "../services/users";
import { apiSlice } from "../services/ApiSlice";
const rootReducer = combineReducers({
  [bootcampsApi.reducerPath]: bootcampsApi.reducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});
const sagaMiddleware = createSagaMiddleware();
console.log({ bootcampsApi });
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(bootcampsApi.middleware)
      .concat(sagaMiddleware),
  devTools: true,
});
export default store;
