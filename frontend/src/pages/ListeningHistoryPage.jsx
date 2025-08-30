
import {Box,Grid,Typography,TextField,InputAdornment,Button, Link,Paper,Divider } from "@mui/material"
import styled from "styled-components";
import { Person, PersonOutline, AlternateEmail, Lock, Visibility, VisibilityOff } from "@mui/icons-material"
import { useParams } from "react-router-dom";
import { QuizResultBadge } from "../components/History/QuizResultBadge";
import { ProgressCircle } from "../components/History/ProgressCircle";
import { fetchGetDetailSubmitTest } from "../redux/thunk/listeningThunk";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { ScoreCircle } from "../components/History/ScoreCircle";
import ClearIcon from '@mui/icons-material/Clear';
import CheckIcon from '@mui/icons-material/Check';
import PassageDisplay from "../components/ListeningTestView/PassageDisplay";
import ExerciseAnswer from "../components/ListeningTestView/ExerciseAnswer";
export default function ListeningHistoryPage(){
    const { loading,examDetail } = useSelector(s => s.listening)
    const {examId} = useParams();
    const dispatch = useDispatch();
    useEffect(()=>{
            const fetchDetail= async()=>{
                await dispatch(fetchGetDetailSubmitTest({id:examId}))
            }
            fetchDetail();
        },[examId])
    const [userAnswer,setUserAnswer] = useState({});

    useEffect(()=>{
        console.log("examDetail: ",examDetail)
        if (!examDetail?.answers) return;
        const mapped = {};
        examDetail.answers.forEach(item=>{
            mapped[item.questionId] = {
                answer:item.answer,
                isCorrect:item.isCorrect,
                correctAnswer:item.correctAnswer
            };
        });
        setUserAnswer(mapped);
    },[examDetail]);
    
    useEffect(()=>{
        console.log("userAnswer: ",userAnswer)
    },[userAnswer])

    const answers = examDetail?.answers || [];
    const mid = Math.ceil(answers?.length / 2); // làm tròn lên nếu lẻ
    const leftAnswers = answers.slice(0, mid);
    const rightAnswers = answers.slice(mid);
    
    return(
        <Box sx={{width:"75%",display:"flex",flexDirection:"column",gap:2,margin:"auto",pb:4}}>
           <Typography variant="h5" sx={{fontWeight:"bold",pt:4}}>Chi tiết bài thi</Typography>
                <Divider></Divider>
             <Paper elevation={4} sx={{width:"100%",py:2,px:4,minHeight:'50vh',display:"flex",alignItems:"center",flexDirection:"column"}}>

                    <Typography variant="h5" fontWeight={"bold"}>Điểm của bạn là:</Typography>

                    <Box display={"flex"} gap={4} alignItems={"center"} mt={4}>
                        
                        <QuizResultBadge  correctAnswers={examDetail?.score} totalQuestions={examDetail?.questionlength}></QuizResultBadge>
                        
                        <ScoreCircle  score={examDetail?.score} maxScore ={examDetail?.questionlength} ></ScoreCircle>

                        <ProgressCircle
                            progress={(examDetail?.score/examDetail?.questionlength)*100}
                            progressColor="#16a34a"
                            backgroundColor="#e5e7eb"
                            style={{
                                backgroundColor: "#fff",
                                borderRadius: "50%",
                                boxShadow: "0 1px 2px 0 rgba(0,0,0,0.05)",
                                border: "1px solid #e5e7eb",
                            }}
                            >
                            <div style={{ textAlign: "center" }}>
                                <div
                                style={{
                                    fontSize: "1.125rem",
                                    fontWeight: "700",
                                    color: "#1f2937",
                                }}
                                >
                                {Math.round((examDetail?.score / examDetail?.questionlength) * 100)}%
                                </div>
                                <div
                                style={{
                                    fontSize: "0.75rem",
                                    color: "#4b5563",
                                }}
                                >
                                Hoàn thành
                                </div>
                            </div>
                            </ProgressCircle>
                    </Box>
                    
                    <Typography variant="h5" fontWeight={"bold"} mt={2}>Câu trả lời:</Typography>

                    <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} mt={4} width={"30%"}>
                        
                        <Box display="flex" gap={4} mt={4} width="100%">
                        {/* Cột bên trái */}
                        <Box flex={1}>
                            {leftAnswers.map((item, index) => (
                            <Box
                                key={index}
                                display="flex"
                                gap={1}
                                mb={1}
                                alignItems="center"
                            >
                                <Box
                                sx={{
                                    width: 50,
                                    height: 50,
                                    borderRadius: "100%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    backgroundColor: "#16a34a",
                                }}
                                >
                                <Typography
                                    variant="body1"
                                    sx={{ fontWeight: "bold", color: "white", fontSize: "16px" }}
                                >
                                    {index + 1}
                                </Typography>
                                </Box>
                                <Typography>
                                <span style={{ color: "#16a34a" }}>{item.correctAnswer}</span>
                                : {item.answer}
                                </Typography>
                                {item?.isCorrect ? (
                                <CheckIcon style={{ color: "var(--success-600)" }} />
                                ) : (
                                <ClearIcon style={{ color: "var(--error-600)" }} />
                                )}
                            </Box>
                            ))}
                        </Box>

                        {/* Cột bên phải */}
                        <Box flex={1}>
                            {rightAnswers.map((item, index) => (
                            <Box
                                key={mid + index} // tránh trùng key
                                display="flex"
                                gap={1}
                                mb={1}
                                alignItems="center"
                            >
                                <Box
                                sx={{
                                    width: 50,
                                    height: 50,
                                    borderRadius: "100%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    backgroundColor: "#16a34a",
                                }}
                                >
                                <Typography
                                    variant="body1"
                                    sx={{ fontWeight: "bold", color: "white", fontSize: "16px" }}
                                >
                                    {mid + index + 1}
                                </Typography>
                                </Box>
                                <Typography>
                                <span style={{ color: "#16a34a" }}>{item.correctAnswer}</span>
                                : {item.answer}
                                </Typography>
                                {item?.isCorrect ? (
                                <CheckIcon style={{ color: "var(--success-600)" }} />
                                ) : (
                                <ClearIcon style={{ color: "var(--error-600)" }} />
                                )}
                            </Box>
                            ))}
                        </Box>
</Box>
                        
                    </Box>
                    

                    <Typography variant="h5" fontWeight={"bold"} mt={2}>Xem lại đề:</Typography>

                    <Box width={"100%"}>
                        <Box sx={{display:"flex",py:2}}>
                            <ExerciseAnswer 
                                partOne={examDetail?.audioId?.questionsPart[0]} 
                                
                                userAnswer = {userAnswer}
                            ></ExerciseAnswer>


                            
                            <PassageDisplay audio={examDetail?.audioId?.audioSrc} title={examDetail?.passageId?.title}></PassageDisplay>
                            
                        </Box>
                    </Box>
             </Paper>
        </Box>
    )
}