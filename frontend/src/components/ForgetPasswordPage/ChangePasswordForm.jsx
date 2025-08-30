import {Box,Grid,Typography,TextField,InputAdornment,Button, Link, Paper } from "@mui/material"

import { Person, PersonOutline, AlternateEmail, Lock, Visibility, VisibilityOff } from "@mui/icons-material";
import LockOutlineIcon from '@mui/icons-material/LockOutline';

import { useEffect, useState } from "react";

import { useSelector,useDispatch } from "react-redux";

import { toast } from "react-toastify";

import { changePasswordWithToken } from "../../redux/thunk/forgetPasswordThunk";
import { useNavigate, useParams } from "react-router-dom";

export function ChangePasswordForm() {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const { loading,error } = useSelector(s => s.forgetPassword)
    const{tokenId} = useParams();


    const [formData, setFormData] = useState({
        password: "",
        confirmPassword:""
      })
    
      const handleInputChange = (key,value) => {
        setFormData((prev) => ({
          ...prev,
          [key]:value
        }))
      }
    
      const handleSubmit = async (event) => {
            event.preventDefault()
           
            if(formData.password!=formData.confirmPassword || formData.password.length<=8){
                toast.error("Mật khẩu không khớp hoặc mật khẩu dưới 8 ký tự");
                return;
            }
            const response = await dispatch(changePasswordWithToken({token:tokenId,password:formData.password}))

            if(response.payload.status === "Success"){
                toast.success("Đổi mật khẩu thành công vui lòng đăng nhập lại.");
                navigate("/dang-nhap")
            }
            else{
                toast.error("Lỗi: " + response?.payload?.message);
            }
           
        
      }


      useEffect(() => {
                  document.body.style.cursor = loading ? "wait" : "default";
                  return () => {
                      document.body.style.cursor = "default";
                  };
              }, [loading]);
      
    return (
        <Paper sx={{
                width: "45%",
                backgroundColor: "white",
                borderRadius: "20px",

                display: "flex",
                alignItems:"center",
                justifyContent:"center",

                py:4,
                // padding: { xs: 4, sm: 2, md: 3,lg: 4 },
                gap:{ xs: 3, sm: 4, md: 7,lg: 8 },
            }}>
            
            

            <Box sx={{
                display:"flex",
                    flexDirection:"column",
                    width:"100%",
                    justifyContent:"center",
                    px:10,
                    py:4,
                    gap:{ xs: 1, sm: 1.5, md: 2,lg: 2.5 },
                
            }}>
                <Typography sx={
                    { 
                        mt: 2,
                        fontSize: {
                          xs: "2rem", // mobile
                          sm: "2rem",   // tablet
                          md: "2.5rem", // desktop
                          lg: "3rem",   // large desktop
                        },
                        textAlign:{
                            xs: "center", // mobile
                            sm: "center",   // tablet
                            md: "center", // desktop
                            lg: "center",   // large desktop
                          },
                        fontWeight: 700 
                    }
                    
                    }>Đổi mật khẩu</Typography>


                <Typography sx={
                    { 
                        mt: 2,
                        fontSize: {
                          xs: "1rem", // mobile
                          sm: "1rem",   // tablet
                          md: "1rem", // desktop
                          lg: "1.2rem",   // large desktop
                        },
                        textAlign:{
                            xs: "center", // mobile
                            sm: "center",   // tablet
                            md: "center", // desktop
                            lg: "left",   // large desktop
                          },
                        
                    }
                    
                    }>Vui lòng nhập mật khẩu mới của bạn!</Typography>

                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                    <Box sx={{ display: "flex", flexDirection: "column",  gap:{ xs: 1, sm: 1.5, md: 2,lg: 2.5 } }}>
                        
                        <TextField
                       
                        fullWidth
                        type="password"
                        placeholder="Nhập mật khẩu của bạn"
                        value={formData.password}
                        onChange={(e)=>handleInputChange("password",e.target.value)}
                        InputProps={{
                            startAdornment: (
                            <InputAdornment position="start">
                                <Lock sx={{ color: "black" }} />
                            </InputAdornment>
                            ),
                        }}
                        variant="outlined"
                        sx={{
                        
                            input: {
                                fontSize: { xs: "0.95rem", sm: "1.1rem" },
                                padding: { xs: "10px 12px", sm: "14px 16px" },
                            },
                        }}
                        />



                        <TextField
                       
                        fullWidth
                        type="password"
                        placeholder="Nhập mật khẩu xác nhận của bạn"
                        value={formData.confirmPassword}
                        onChange={(e)=>handleInputChange("confirmPassword",e.target.value)}
                        InputProps={{
                            startAdornment: (
                            <InputAdornment position="start">
                                <LockOutlineIcon sx={{ color: "black" }} />
                            </InputAdornment>
                            ),
                        }}
                        variant="outlined"
                        sx={{
                        
                            input: {
                                fontSize: { xs: "0.95rem", sm: "1.1rem" },
                                padding: { xs: "10px 12px", sm: "14px 16px" },
                            },
                        }}
                        />

                    </Box>
                


                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap:2.5
                    }}>

                    <Button
                        disabled={loading}
                        type="submit"
                        sx={{
                            
                            px: {
                                xs: 3, // mobile
                                sm: 3.5,   // tablet
                                md: 4, // desktop
                                lg: 4.5,   // large desktop
                            },
                            py: {
                                xs: 1, // mobile
                                sm: 1,   // tablet
                                md: 1.5, // desktop
                                lg: 1.5,   // large desktop
                            },
                            fontSize:{
                                xs: "0.95rem", // mobile
                                sm: "1rem",   // tablet
                                md: "1rem", // desktop
                                lg: "1.1rem",   // large desktop
                            },
                            
                        }}
                        variant="contained"
                        >
                        {loading? "Đang xử lý....":"Xác nhận"}
                    </Button>


                    

                        
                    </Box>
                </form>


            </Box>
            
            
                
        </Paper>
    )

}