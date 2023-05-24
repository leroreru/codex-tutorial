import {configureStore} from '@reduxjs/toolkit'
import userReducers from '../reducer/userReducer'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from '@redux-saga/core'
import { combineReducers } from "redux";
import productReducers from '../reducer/productReducer';
import productCatReducers from '../reducer/productCatReducer';
import rootSaga from '../saga'


// const reducere={
// prodReducers: productReducers,
// userReducer:userReducers
// }
const logger = createLogger()
const saga = createSagaMiddleware()

const reducer = combineReducers ({
    userReducers,
    // productReducer : productReducers,
    // productCatReducer : productCatReducers
})

const store=configureStore({
reducer,
middleware: (getDefaultMiddleware)=>
 getDefaultMiddleware({serializableCheck: false,}).concat(logger).concat(saga)
})

saga.run(rootSaga)
export default store;