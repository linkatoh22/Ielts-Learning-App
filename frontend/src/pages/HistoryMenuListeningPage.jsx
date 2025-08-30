import {Box,Grid,Typography,TextField,InputAdornment,Button, Link,Paper,Divider, IconButton } from "@mui/material"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { fetchGetAllSubmitTest } from "../redux/thunk/listeningThunk";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate } from "react-router-dom";



export default function HistoryListeningMenuPage(){
    const { loading,exam } = useSelector(s => s.listening)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(()=>{
        const fetchDetailAll= async()=>{
            await dispatch(fetchGetAllSubmitTest())
        }
        fetchDetailAll();
    },[])


    useEffect(()=>{
        console.log("exam: ",exam)
    },[exam])

    const handleNavDetail = (questionId)=>{
           window.open(`/listening/lich-su-thi/${questionId}`, "_blank");
    }

    return(
        <Box sx={{width:"75%",display:"flex",flexDirection:"column",gap:2,margin:"auto",pb:4,minHeight:"75vh",justifyContent:"center"}}>
            <Typography variant="h4" sx={{fontWeight:"bold",color:"var(--warning-700)"}}>Lịch sử luyện thi Listening</Typography>
                <Divider></Divider>

            <Paper elevation={4} sx={{width:"100%",py:2,px:4,height:'60vh'}}>
                    
                     <Typography variant="h6" sx={{fontWeight:"bold"}}>Chi tiết các bài thi đã làm:</Typography>

                     <TableContainer 
                        component={Paper} 
                        sx={{ height:"90%", overflow: "auto",mt:2  }}
                        >
                        <Table stickyHeader   aria-label="simple table">
                            <TableHead>
                                <TableRow >
                                    <TableCell align="center" sx={{fontWeight:"bold"}}>STT</TableCell>
                                    <TableCell align="center" sx={{fontWeight:"bold"}}>Thời gian</TableCell>
                                    <TableCell align="center" sx={{fontWeight:"bold"}}>Số câu làm đúng</TableCell>
                                    <TableCell align="center" sx={{fontWeight:"bold"}}>Số tổng số câu </TableCell>
                                    <TableCell align="center" sx={{fontWeight:"bold"}}>Phần trăm đạt được </TableCell>
                                    <TableCell align="center" sx={{fontWeight:"bold"}}>Xem</TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody >
                                {exam?.map((row,index) => (
                                    <TableRow
                                    
                                    >
                                            <TableCell align="center" >
                                                {index+1}
                                            </TableCell >
                                            <TableCell align="center">
                                                 {new Date(row?.submittedAt).toLocaleDateString("vi-VN")}{" "}
                                                {new Date(row?.submittedAt).toLocaleTimeString("vi-VN")}
                                            </TableCell>
                                            <TableCell align="center">{row?.score??"-"}</TableCell>
                                            <TableCell align="center">{row?.questionlength??"-"}</TableCell>
                                            <TableCell align="center">{Math.round((row?.score/row?.questionlength)*100)??"-"}%</TableCell>

                                            <TableCell align="center" onClick={()=>handleNavDetail(row._id)}>
                                                <IconButton>
                                                    <VisibilityIcon color="primary" ></VisibilityIcon>
                                                </IconButton>
                                            </TableCell>
                                        
                                        </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                        </TableContainer>

            </Paper>


        </Box>
        
    )
}