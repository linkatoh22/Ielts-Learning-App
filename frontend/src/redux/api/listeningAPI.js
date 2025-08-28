const BASE_URL = import.meta.env.VITE_BASE_URL;
import axiosClient from "../interceptor/axiosClient";

export const ListeningApi = {

    fetchGetAllAudio: () =>
        axios.get(`${BASE_URL}/listening-test/get-all-audio`),
    fetchGetAllTest: () =>
        axios.get(`${BASE_URL}/listening-test/get-all-test`),

    fetchSubmitListeningExam: ({id,data}) =>
        axiosClient.post(`${BASE_URL}/listening-test/submit/submit-test/${id}`, data,{  
                useAuth:true,
                headers: {
                    "Content-Type": "multipart/form-data"
                }  
    }),

    fetchGetAllSubmitTest: () =>
        axiosClient.get(`${BASE_URL}/listening-test/submit/get-all-submit-test`,{  useAuth:true }),
    
    fetchGetDetailSubmitTest: ({id}) =>
        axiosClient.get(`${BASE_URL}/listening-test/submit/get-detail-submit-test/${id}`,{  useAuth:true }),
    fetchGetDetailTest: ({id}) =>
        axiosClient.get(`${BASE_URL}/listening-test/submit/get-detail-test/${id}`,{  useAuth:true }), 
  
};
