import {configureStore} from '@reduxjs/toolkit'
import userReducers from '../reducer/userReducer'

import { combineReducers } from "redux";
import productReducers from '../reducer/productReducer';
import productCatReducers from '../reducer/productCatReducer';

// const reducere={
// prodReducers: productReducers,
// userReducer:userReducers
// }

const reducer = combineReducers ({
    userReducer: userReducers,
    productReducer : productReducers,
    productCatReducer : productCatReducers
})

const store=configureStore({
reducer,
middleware: (getDefaultMiddleware)=>
 getDefaultMiddleware({

serializableCheck: false,
})
})

export default store;