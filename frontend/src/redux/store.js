import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../redux/slice/authSlice'
import forgetPasswordReducer from "../redux/slice/forgetPasswordSlice"
import listeningSlice from "./slice/listeningSlice"
import readingSlice from "./slice/readingSlice"

export const store = configureStore({
    reducer:{
        auth:authReducer,
        forgetPassword: forgetPasswordReducer,
        listening:listeningSlice,
        reading:readingSlice
        
    }
})