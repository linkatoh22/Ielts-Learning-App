const BASE_URL = import.meta.env.VITE_BASE_URL;
import axios from "axios";
import axiosClient from "../interceptor/axiosClient";

export const ReadingApi = {
    fetchGetAllPassage: () =>
        axios.get(`${BASE_URL}/reading-test/get-all-passage`),
    fetchGetAllTest: () =>{
        return axiosClient.get(`${BASE_URL}/reading-test/get-all-test`,{  
                useAuth:true,
                headers: {
                    "Content-Type": "multipart/form-data"
                }  
        })
        
    },
    
    fetchSubmitExam: ({examId,data}) =>
        axiosClient.post(`${BASE_URL}/reading-test/submit/submit-test/${examId}`, data,
            {  
                useAuth:true 
            }
    ),

    fetchGetAllSubmitTest: () =>
        axiosClient.get(`${BASE_URL}/reading-test/submit/get-all-submit-test`,{  useAuth:true }),
    
    fetchGetDetailSubmitTest: ({id}) =>
        axiosClient.get(`${BASE_URL}/reading-test/submit/get-detail-submit-test/${id}`,{  useAuth:true }),
    fetchGetDetailTest: ({id}) =>
        axiosClient.get(`${BASE_URL}/reading-test/get-detail-test/${id}`,{  useAuth:true }), 
  
};
