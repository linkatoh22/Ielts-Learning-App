
import {
  AppBar,
  Toolbar,
  Typography,
  TextField,
  IconButton,
  Box,
  InputAdornment,
  Paper,
  Menu,
  MenuItem,
  Button
} from "@mui/material"
import { fetchGetDetailTest, fetchSubmitExam } from "../redux/thunk/listeningThunk"
import { useDispatch,useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import PassageDisplay from "../components/ListeningTest/PassageDisplay";
import ExerciseAnswer from "../components/ListeningTest/ExerciseAnswer";
import { toast } from "react-toastify";
import { CompleteBar } from "../components/ListeningTest/CompleteBar";
export default function ListeningTestPage(){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { loading,examDetail } = useSelector(s => s.listening)
    const [userAnswer,setUserAnswer] = useState([]);
    const {examId} = useParams();
    
    useEffect(()=>{
        setUserAnswer([])
        const fetchDetail= async()=>{
            await dispatch(fetchGetDetailTest({id:examId}))
        }
        fetchDetail();
    },[examId])


    

    useEffect(()=>{

        examDetail?.audio?.questionsPart[0].questionDetail?.forEach((item)=>{
            setUserAnswer(prev=>({
                 ...prev,
                  [item._id]: null
                })
               
            )
        })

        
    },[examDetail])

    const handleSubmitTest = async()=>{
        const missingAnswer = Object.values(userAnswer).some(answer => !answer);
        if (missingAnswer) {
            toast.error("Vui lòng nhập đầy đủ các câu hỏi");
            return;
        }
        var answers =[]
        Object.entries(userAnswer).forEach(([questionId, answer]) => {
            
            answers.push({questionId:questionId, answer:answer})
        })

       

        const response = await dispatch(fetchSubmitExam({id:examDetail._id,data:{answers:answers}}))
        
        console.log("answers: ", answers);
        if (response.payload.status === "SUCCESS") {
                toast.success("Nộp bài thành công");
                
                navigate(`/listening/lich-su-thi/${response.payload.submitDetail.submission._id}`);

            } else {
                toast.error("Lỗi: " + response?.payload?.message);
            }
        
    }

    // useEffect(()=>{
    //     console.log("userAnswer: ",userAnswer)
    // },[userAnswer])

    // useEffect(()=>{
    //     console.log("examDetail: ",examDetail?.passages)
    // },[examDetail])

    return(
        <>
        <Box sx={{width:"100%",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>


            <Box sx={{width:"100%",display:"flex",alignItems:"center",justifyContent:"center",margin:"auto" }}>

                
                <CompleteBar userAnswer={userAnswer}></CompleteBar>
                <Button variant="contained" onClick={()=>handleSubmitTest()}>Nộp bài</Button>
            </Box>


            <Box sx={{display:"flex",py:2}}>

                <PassageDisplay audio={examDetail?.audio?.audioSrc}></PassageDisplay>
                <ExerciseAnswer 
                    userAnswer={userAnswer}
                    setUserAnswer={setUserAnswer}
                    partOne={examDetail?.audio?.questionsPart[0]} 
                    
                ></ExerciseAnswer>
            </Box>

        </Box>
        </>
    )
}

