import { createAsyncThunk } from "@reduxjs/toolkit";
import { ReadingApi } from "../api/readingAPI";

export const fetchGetAllPassage = createAsyncThunk(
    "reading/fetchGetAllPassage",
    async(payload,{rejectWithValue })=>{
        try{
            const response = await ReadingApi.fetchGetAllPassage(payload);
            return response.data
        }
        catch(error){
            return rejectWithValue (error.response?.data || error.message);
        }
    }

)
// Lấy hết test
export const fetchGetAllTest = createAsyncThunk(
    "reading/fetchGetAllTest",
    async(payload,{rejectWithValue })=>{
        try{
            const response = await ReadingApi.fetchGetAllTest(payload);
            return response.data
        }
        catch(error){
            return rejectWithValue (error.response?.data || error.message);
        }
    }

)
// SUBMIT TEST
export const fetchSubmitListeningExam = createAsyncThunk(
    "reading/fetchSubmitListeningExam",
    async(payload,{rejectWithValue })=>{
        try{
            const response = await ReadingApi.fetchSubmitListeningExam(payload);
            return response.data
        }
        catch(error){
            return rejectWithValue (error.response?.data || error.message);
        }
    }

)

// Lấy hết test đã submit của 1 user
export const fetchGetAllSubmitTest = createAsyncThunk(
    "reading/fetchGetAllSubmitTest",
    async(payload,{rejectWithValue })=>{
        try{
            const response = await ReadingApi.fetchGetAllSubmitTest(payload);
            return response.data
        }
        catch(error){
            return rejectWithValue (error.response?.data || error.message);
        }
    }

)
//LẤY DETAIL BÀI TEST ĐÃ SUBMIT
export const fetchGetDetailSubmitTest = createAsyncThunk(
    "reading/fetchGetDetailSubmitTest",
    async(payload,{rejectWithValue })=>{
        try{
            const response = await ReadingApi.fetchGetDetailSubmitTest(payload);
            return response.data
        }
        catch(error){
            return rejectWithValue (error.response?.data || error.message);
        }
    }

)
//LẤY DETAIL BÀI TEST (THƯỜNG DÙNG ĐỂ FETCH ĐỀ)
export const fetchGetDetailTest = createAsyncThunk(
    "reading/fetchGetDetailTest",
    async(payload,{rejectWithValue })=>{
        try{
            const response = await ReadingApi.fetchGetDetailTest(payload);
            return response.data
        }
        catch(error){
            return rejectWithValue (error.response?.data || error.message);
        }
    }

)