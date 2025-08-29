const BASE_URL = import.meta.env.VITE_BASE_URL;
import { Troubleshoot } from "@mui/icons-material";
import axiosClient from "../interceptor/axiosClient";
import axios from "axios";
export const ListeningApi = {

    fetchGetAllAudio: () =>
        axios.get(`${BASE_URL}/listening-test/get-all-audio`),
    fetchGetAllTest: () =>
        axiosClient.get(`${BASE_URL}/listening-test/get-all-test`),

    fetchSubmitExam: ({id,data}) =>
        axiosClient.post(`${BASE_URL}/listening-test/submit/submit-test/${id}`, data,{  
                useAuth:true 
    }),

    fetchGetAllSubmitTest: () =>
        axiosClient.get(`${BASE_URL}/listening-test/submit/get-all-submit-test`,{  useAuth:true }),
    
    fetchGetDetailSubmitTest: ({id}) =>
        axiosClient.get(`${BASE_URL}/listening-test/submit/get-detail-submit-test/${id}`,{  useAuth:true }),
    fetchGetDetailTest: ({id}) =>
        axiosClient.get(`${BASE_URL}/listening-test/get-detail-test/${id}`,{  useAuth:true })
       
    , 
  
};
