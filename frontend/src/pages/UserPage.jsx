import {Box,Grid,Typography,TextField,InputAdornment,Button, Link,Paper,Divider } from "@mui/material";
import { fetchUserDetail } from "../redux/thunk/authThunk";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export default function UserPage(){
    const dispatch = useDispatch();
    const { loading,error,userInfo } = useSelector(s => s.auth)

    useEffect(()=>{
        const fetchUser = async()=>{
            await dispatch(fetchUserDetail())
        }
        fetchUser();
    },[])

    // useEffect(()=>{
    //     console.log("userInfo: ",userInfo)
    // },[userInfo])

    return(
        <Box sx={{width:"60%",display:"flex",flexDirection:"column",gap:2,margin:"auto",p:4}}>

                <Paper elevation={4} sx={{width:"100%",py:2,px:4,minHeight:'61.5vh',display:"flex",alignItems:"center",flexDirection:"column"}}>
                        <Typography variant="h5" sx={{fontWeight:"bold",pt:4}}>Thông tin người dùng</Typography>
                        <Grid container spacing={2} mx={5} my={2}>

                            <Grid size={6}>
                                <Box >
                                    <Typography fontWeight={"bold"}>Họ tên:</Typography>
                                    <TextField
                                    
                                    disabled
                                        value={userInfo?.fullname}
                                    variant="standard"
                                    size="small"
                                        
                                    sx={{ mx: 1, width: 400 }}
                                    />
                                </Box>
                            </Grid>

                            <Grid size={6}>
                                <Box>
                                    <Typography fontWeight={"bold"} >Email:</Typography>
                                    
                                    <TextField
                                    
                                    disabled
                                        value={userInfo?.email}
                                    variant="standard"
                                    size="small"
                                        
                                    sx={{ mx: 1, width: 400 }}
                                    />
                                </Box>
                            </Grid>

                            <Grid size={6}>
                                <Box>
                                    <Typography fontWeight={"bold"} >Vai trò:</Typography>
                                    
                                    <TextField
                                    
                                    disabled
                                        value={userInfo?.role}
                                    variant="standard"
                                    size="small"
                                        
                                    sx={{ mx: 1, width: 400 }}
                                    />
                                </Box>
                            </Grid>
                        </Grid>

                        

                </Paper>
           
        </Box>
    )
}