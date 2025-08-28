const BASE_URL = import.meta.env.VITE_BASE_URL;
import axiosClient from "../interceptor/axiosClient";

export const ReadingApi = {
    fetchGetAllPassage: () =>
        axios.get(`${BASE_URL}/reading-test/get-all-passage`),
    fetchGetAllTest: () =>
        axios.get(`${BASE_URL}/reading-test/get-all-test`),
    
    fetchSubmitReadingExam: ({examId,data}) =>
        axiosClient.post(`${BASE_URL}/reading-test/submit-test/${examId}`, data,{  
                useAuth:true,
                headers: {
                    "Content-Type": "multipart/form-data"
                }  
        }),

    fetchGetAllSubmitTest: () =>
        axiosClient.get(`${BASE_URL}/reading-test/submit/get-all-submit-test`,{  useAuth:true }),
    fetchGetDetailSubmitTest: ({id}) =>
        axiosClient.get(`${BASE_URL}/reading-test/submit/get-detail-submit-test/${id}`,{  useAuth:true }),
    fetchGetDetailTest: ({id}) =>
        axiosClient.get(`${BASE_URL}/reading-test/submit/get-detail-test/${id}`,{  useAuth:true }), 
  
};
