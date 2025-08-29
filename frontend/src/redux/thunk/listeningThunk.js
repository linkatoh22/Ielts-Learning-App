import { createAsyncThunk } from "@reduxjs/toolkit";
import { ListeningApi } from "../api/listeningAPI";

export const fetchGetAllAudio = createAsyncThunk(
    "listening/fetchGetAllAudio",
    async(payload,{rejectWithValue })=>{
        try{
            const response = await ListeningApi.fetchGetAllAudio(payload);
            return response.data
        }
        catch(error){
            return rejectWithValue (error.response?.data || error.message);
        }
    }

)
// Lấy hết test
export const fetchGetAllTest = createAsyncThunk(
    "listening/fetchGetAllTest",
    async(payload,{rejectWithValue })=>{
        try{
            const response = await ListeningApi.fetchGetAllTest(payload);
            return response.data
        }
        catch(error){
            return rejectWithValue (error.response?.data || error.message);
        }
    }

)
// SUBMIT TEST
export const fetchSubmitExam = createAsyncThunk(
    "listening/fetchSubmitExam",
    async(payload,{rejectWithValue })=>{
        try{
            const response = await ListeningApi.fetchSubmitExam(payload);
            return response.data
        }
        catch(error){
            return rejectWithValue (error.response?.data || error.message);
        }
    }

)

// Lấy hết test đã submit của 1 user
export const fetchGetAllSubmitTest = createAsyncThunk(
    "listening/fetchGetAllSubmitTest",
    async(payload,{rejectWithValue })=>{
        try{
            const response = await ListeningApi.fetchGetAllSubmitTest(payload);
            return response.data
        }
        catch(error){
            return rejectWithValue (error.response?.data || error.message);
        }
    }

)
//SUBMIT: LẤY DETAIL BÀI TEST ĐÃ SUBMIT
export const fetchGetDetailSubmitTest = createAsyncThunk(
    "listening/fetchGetDetailSubmitTest",
    async(payload,{rejectWithValue })=>{
        try{
            const response = await ListeningApi.fetchGetDetailSubmitTest(payload);
            return response.data
        }
        catch(error){
            return rejectWithValue (error.response?.data || error.message);
        }
    }

)
//LẤY DETAIL BÀI TEST (THƯỜNG DÙNG ĐỂ FETCH ĐỀ)
export const fetchGetDetailTest = createAsyncThunk(
    "listening/fetchGetDetailTest",
    async(payload,{rejectWithValue })=>{
        try{
            console.log("HERE");
            const response = await ListeningApi.fetchGetDetailTest(payload);
           
            return response.data
        }
        catch(error){
            return rejectWithValue (error.response?.data || error.message);
        }
    }

)