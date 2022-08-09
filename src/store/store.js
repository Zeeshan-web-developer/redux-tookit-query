import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import logger from 'redux-logger'
import createSagaMiddleware from "redux-saga";
import usersSlice from './usersSlice';
import { quotesApi } from '../services/users';


const rootReducer = combineReducers({
    users: usersSlice,
    [quotesApi.reducerPath]: quotesApi.reducer,
     
});
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(logger).concat(quotesApi.middleware).concat(sagaMiddleware),
});

export default store;
