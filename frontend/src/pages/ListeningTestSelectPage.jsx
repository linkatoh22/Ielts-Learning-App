import styled from "styled-components";


import {Box,Grid,Typography,TextField,InputAdornment,Button, Link,Paper, Divider } from "@mui/material"

import { fetchGetAllTest } from "../redux/thunk/listeningThunk";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


export function SelectListeningPage() {
    const dispatch = useDispatch()
    const { loading,exam } = useSelector(s => s.listening)
    const navigate = useNavigate()
    useEffect(()=>{
        const fetchExam = async ()=>{
            const response = await dispatch(fetchGetAllTest())
            
        }
        fetchExam();
    },[])

    useEffect(() => {
                      document.body.style.cursor = loading ? "wait" : "default";
                      return () => {
                          document.body.style.cursor = "default";
                      };
                  }, [loading]);

    const handleNavTest = (id)=>{
        navigate(`/listening/thi/${id}`)
    }
    return (

        <Box sx={{width:"75%",display:"flex",flexDirection:"column",gap:2,margin:"auto",pb:4,minHeight:"75vh",justifyContent:"center"}}>

                <Typography variant="h4" sx={{fontWeight:"bold",color:"var(--warning-700)"}}>Luyện đề thi Listening</Typography>
                <Divider></Divider>

                <Paper elevation={4} sx={{width:"100%",py:2,px:4,minHeight:'50vh'}}>
                    <Box my={2}>
                        <Typography variant="h6" sx={{fontWeight:600}}>Chọn đề Listening</Typography>
                        <Divider></Divider>
                    </Box>
                    <Box sx={{display:"flex",flexWrap:"wrap",gap:2}}>
                            {
                                exam?.map((item,index)=>{
                                    return <Box
                                        onClick={()=>handleNavTest(item._id)}
                                            key={index+1}
                                            sx={{
                                                width:50,
                                                height: 50,
                                                border: "1px solid #e0e0e0",
                                                borderRadius: 2,
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                backgroundColor: "#ffffff",
                                                cursor: "pointer",
                                                transition: "all 0.2s ease-in-out",
                                                "&:hover": {
                                                backgroundColor: "#f5f5f5",
                                                borderColor: "#bdbdbd",
                                                transform: "translateY(-1px)",
                                                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                                                },
                                            }}
                                            >
                                            <Typography
                                                variant="body1"
                                                sx={{
                                                fontWeight: 500,
                                                color: "#666666",
                                                fontSize: "16px",
                                                }}
                                            >
                                                {index+1}
                                            </Typography>
                                            </Box>
                                                                    })
                                                                }

                    </Box>

                </Paper>

            

        </Box>
    
    )
}