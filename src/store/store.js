import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import createSagaMiddleware from "redux-saga";
import { brandSlice } from "./slices/brandSlice";
import { apiSlice } from "../services/ApiSlice";
import authSlice from "./slices/authSlice";
import rootSaga from "./BrandSaga";
const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  [brandSlice.reducerPath]: brandSlice.reducer,
  authSlice,
});
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(brandSlice.middleware).concat(sagaMiddleware),
  devTools: true,
});
sagaMiddleware.run(rootSaga);
setupListeners(store.dispatch);
export default store;
