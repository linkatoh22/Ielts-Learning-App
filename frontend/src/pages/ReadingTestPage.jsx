
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
import { fetchGetDetailTest, fetchSubmitExam } from "../redux/thunk/readingThunk"
import { useDispatch,useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import PassageDisplay from "../components/ReadingTest/PassageDisplay";
import ExerciseAnswer from "../components/ReadingTest/ExerciseAnswer";
import { toast } from "react-toastify";
import { CompleteBar } from "../components/ListeningTest/CompleteBar";


export default function ReadingTestPage(){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { loading,examDetail } = useSelector(s => s.reading)

    const {examId} = useParams();
    
    useEffect(()=>{
        const fetchDetail= async()=>{
            await dispatch(fetchGetDetailTest({id:examId}))
        }
        fetchDetail();
    },[examId])


    const [userAnswer,setUserAnswer] = useState([]);

    useEffect(()=>{
        examDetail?.passages?.questionsPartOne?.questionDetail?.forEach((item)=>{
            setUserAnswer(prev=>({
                 ...prev,
                  [item._id]: null
                })
               
            )
        })

        examDetail?.passages?.questionsPartTwo?.questionDetail?.forEach((item)=>{
            setUserAnswer(prev=>({
                 ...prev,
                  [item._id]: null
                })
               
            )
        })

        examDetail?.passages?.questionsPartThree?.questionDetail?.forEach((item)=>{
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

        const response = await dispatch(fetchSubmitExam({examId:examDetail._id,data:{answers:answers}}))
        console.log("response: ",response)
        if (response.payload.status === "SUCCESS") {
                toast.success("Nộp bài thành công");
                
                navigate(`/reading/lich-su-thi/${response.payload.submitDetail.submission._id}`);

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
        <Box py={2}>
        <Box sx={{width:"100%",textAlign:"center"}}>
            <Typography variant="h6" fontWeight={"bold"}>Đề thi Reading</Typography>
            <Box sx={{width:"100%",display:"flex",alignItems:"center",justifyContent:"center",gap:2 }}>
                <CompleteBar userAnswer={userAnswer}></CompleteBar>

                <Button 
                    color="secondary"
                    sx={{fontWeight:"bold", px:4, py:1}}
                    variant="contained" 
                    onClick={()=>handleSubmitTest()}>Nộp bài</Button>

            </Box>
        </Box>
        <Box sx={{display:"flex",py:2}}>

            <PassageDisplay passage={examDetail?.passages?.content} title={examDetail?.passages?.title}></PassageDisplay>
            <ExerciseAnswer 
                userAnswer={userAnswer}
                setUserAnswer={setUserAnswer}
                partOne={examDetail?.passages?.questionsPartOne} 
                partTwo={examDetail?.passages?.questionsPartTwo} 
                partThree={examDetail?.passages?.questionsPartThree}
            ></ExerciseAnswer>
        </Box>

        
        </Box>
    )
}

