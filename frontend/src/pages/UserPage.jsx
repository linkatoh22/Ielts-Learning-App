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
        <Box sx={{width:"50%",display:"flex",flexDirection:"column",gap:2,margin:"auto",p:4,minHeight:'71.7vh',alignItems:"center",justifyContent:"center"}}>

                <Paper elevation={4} sx={{width:"100%",py:8,px:4,display:"flex",alignItems:"center",flexDirection:"column"}}>
                        <Typography variant="h4" sx={{fontWeight:"bold",pt:4}}>Thông tin người dùng</Typography>
                        <Grid container spacing={2} mx={5} py={2}>

                            <Grid size={6}>
                                <Box >
                                    <Typography fontWeight={"bold"} variant="h6">Họ tên:</Typography>
                                    <TextField
                                    
                                    disabled
                                    
                                        value={userInfo?.fullname}
                                    variant="standard"
                                    size="small"
                                    
                                    sx={{ 
                                        mx: 1, 
                                        width: 400,
                                        "& .MuiInputBase-input": {
                                        fontSize: "1.2rem",   // chỉnh cỡ chữ ở đây
                                          // có thể thêm nếu cần
                                        }
                                    }}
                                    />
                                </Box>
                            </Grid>

                            <Grid size={6}>
                                <Box>
                                    <Typography fontWeight={"bold"} variant="h6">Email:</Typography>
                                    
                                    <TextField
                                    
                                    disabled
                                        value={userInfo?.email}
                                    variant="standard"
                                    size="small"
                                        
                                    sx={{ 
                                        mx: 1, 
                                        width: 400,
                                        "& .MuiInputBase-input": {
                                        fontSize: "1.2rem",   // chỉnh cỡ chữ ở đây
                                          // có thể thêm nếu cần
                                        }
                                    }}
                                    />
                                </Box>
                            </Grid>

                            <Grid size={6}>
                                <Box>
                                    <Typography fontWeight={"bold"} variant="h6">Vai trò:</Typography>
                                    
                                    <TextField
                                    
                                    disabled
                                        value={userInfo?.role}
                                    variant="standard"
                                    size="small"
                                        
                                    sx={{ 
                                        mx: 1, 
                                        width: 400,
                                        "& .MuiInputBase-input": {
                                        fontSize: "1.2rem",   // chỉnh cỡ chữ ở đây
                                          // có thể thêm nếu cần
                                        }
                                    }}
                                    />
                                </Box>
                            </Grid>
                        </Grid>

                        

                </Paper>
           
        </Box>
    )
}