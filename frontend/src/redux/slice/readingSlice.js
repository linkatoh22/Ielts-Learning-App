import {createSlice} from "@reduxjs/toolkit"
import {fetchGetAllPassage,fetchGetAllSubmitTest,fetchGetAllTest,fetchGetDetailSubmitTest,fetchGetDetailTest,fetchSubmitListeningExam } from "../thunk/readingThunk"

const initialState = {
    loading:false,
    examDetail:null,
    exam:[],
    submitDetail:null
}


const listeningSlice = createSlice({
    name:"reading",
    initialState,
    reducers:{ },
    extraReducers:(builder)=>{
        builder
            
            // Lấy hết test
            .addCase(fetchGetAllTest.pending,(state)=>{
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchGetAllTest.fulfilled, (state, action) => {
                state.loading = false;
                state.exam = action.payload.data.exam;
                
                state.error = null;
            })
            .addCase(fetchGetAllTest.rejected, (state, action) => {
                state.loading = false;
                // state.error = action.payload || "Gửi token thất bại";
            
            })

            // SUBMIT TEST
            .addCase(fetchSubmitListeningExam.pending,(state)=>{
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchSubmitListeningExam.fulfilled, (state, action) => {
                state.loading = false;
                state.submitDetail = action.payload.data.submitDetail;
                state.error = null;
            })
            .addCase(fetchSubmitListeningExam.rejected, (state, action) => {
                state.loading = false;
                // state.error = action.payload || "Gửi token thất bại";
            
            })


            // Lấy hết test đã submit của 1 user
            .addCase(fetchGetAllSubmitTest.pending,(state)=>{
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchGetAllSubmitTest.fulfilled, (state, action) => {
                state.loading = false;
                state.exam = action.payload.data.exam;
                state.error = null;
            })
            .addCase(fetchGetAllSubmitTest.rejected, (state, action) => {
                state.loading = false;
                // state.error = action.payload || "Gửi token thất bại";
            })

            //LẤY DETAIL BÀI TEST ĐÃ SUBMIT
            .addCase(fetchGetDetailSubmitTest.pending,(state)=>{
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchGetDetailSubmitTest.fulfilled, (state, action) => {
                state.loading = false;
                state.examDetail = action.payload.data.exam;
                state.error = null;
            })
            .addCase(fetchGetDetailSubmitTest.rejected, (state, action) => {
                state.loading = false;
                // state.error = action.payload || "Gửi token thất bại";
            })

            //LẤY DETAIL BÀI TEST (THƯỜNG DÙNG ĐỂ FETCH ĐỀ)
            .addCase(fetchGetDetailTest.pending,(state)=>{
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchGetDetailTest.fulfilled, (state, action) => {
                state.loading = false;
                state.examDetail = action.payload.data.exam;
                state.error = null;
            })
            .addCase(fetchGetDetailTest.rejected, (state, action) => {
                state.loading = false;
                // state.error = action.payload || "Gửi token thất bại";
            })


            


    }
})


export default listeningSlice.reducer;