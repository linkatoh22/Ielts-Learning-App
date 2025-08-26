import {Box,Grid,Typography,TextField,InputAdornment,Button, Link,Paper } from "@mui/material"
import styled from "styled-components";
import { Person, PersonOutline, AlternateEmail, Lock, Visibility, VisibilityOff } from "@mui/icons-material"
import LockOutlineIcon from '@mui/icons-material/LockOutline';
import { GoogleSVG } from "../assets/googleSvg";
import BadgeIcon from '@mui/icons-material/Badge';
import { useContext, useEffect, useState } from "react";

import { fetchLogin } from "../redux/thunk/authThunk";
import { useDispatch,useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";


const GoogleIcon  = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    cursor: pointer;
  
`
const BASE_URL = import.meta.env.VITE_BASE_URL_ORG;
export function LogInPage() {

    const {login} = useContext(AuthContext);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })
    
    const { loading,error,accessToken } = useSelector(s => s.auth)
    
    const handleInputChange = (key,value) => {
        setFormData((prev) => ({
          ...prev,
          [key]:value
        }))
      }
    
    const handleSubmit = async (event) => {
            event.preventDefault()
            

            if (!formData.email || !formData.password) {
                toast.error("Vui lòng điền đầy đủ thông tin");
                return;
            }

            const response = await dispatch(fetchLogin({
                email: formData.email,
                password: formData.password }));

            if (response.payload.status === "Success") {
                toast.success("Đăng nhập thành công");
                console.log("response.payload.user: ",response.payload.data);
                login(response.payload.token.accessToken,response.payload.data);
                navigate("/");

            } else {
                toast.error("Lỗi: " + response?.payload?.message);
            }
        
      }

    const handleGoogleLogin = () => {
        window.location.href = `${BASE_URL}/api/auth/google`;
      }


    useEffect(() => {
                  document.body.style.cursor = loading ? "wait" : "default";
                  return () => {
                      document.body.style.cursor = "default";
                  };
              }, [loading]);

    return (

        <Box sx={{
            width: "100%",
            height:"75vh",
            py:5,
            backgroundColor:"var(--grey-100)",
            backgroundAttachment: "fixed",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}>
            <Paper sx={{
                width: "50%",
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
                    py:2,
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
                                md: "left", // desktop
                                lg: "left",   // large desktop
                            },
                            fontWeight: 700 
                        }
                        
                        }>Đăng Nhập</Typography>

                    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                        <Box sx={{ display: "flex", flexDirection: "column",  gap:{ xs: 1, sm: 1.5, md: 2,lg: 2.5 } }}>
                            
                            <TextField
                            fullWidth
                            placeholder="Nhập email của bạn"
                            value={formData.email}
                            onChange={(e)=>handleInputChange("email",e.target.value)}
                            InputProps={{
                                startAdornment: (
                                <InputAdornment position="start">
                                    <AlternateEmail sx={{ color: "black" }} />
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
                            placeholder="Nhập mật khẩu"
                            type="password"
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
                           
                           
                            boxShadow: "none",
                            
                        }}
                        variant="contained"
                        >
                            {loading? "Đang xử lý.. ":"Đăng nhập"}
                        
                    </Button>


                    <Typography sx={
                        { 
                            display:"flex",
                            flexDirection:"row",
                            alignItems:"center",
                            gap:1,
                            mt: 2,
                            fontSize: {
                            xs: "0.95rem", // mobile
                            sm: "1.1  rem",   // tablet
                            md: "1.15rem", // desktop
                            lg: "1.15rem",   // large desktop
                            },
                            textAlign:{
                                xs: "center", // mobile
                                sm: "center",   // tablet
                                md: "left", // desktop
                                lg: "left",   // large desktop
                            },
                            }}> 
                            <div> Hoặc đăng nhập với </div> 

                            <GoogleIcon onClick = {()=>handleGoogleLogin()}>
                                <GoogleSVG></GoogleSVG>
                            
                            </GoogleIcon>
                    </Typography>


                        <Typography sx={
                        { 
                            mt: 2,
                            fontSize: {
                            xs: "0.95rem", // mobile
                            sm: "1.1  rem",   // tablet
                            md: "1.15rem", // desktop
                            lg: "1.15rem",   // large desktop
                            },
                            textAlign:{
                                xs: "center", // mobile
                                sm: "center",   // tablet
                                md: "left", // desktop
                                lg: "left",   // large desktop
                            },
                            }}> Đã có tài khoản? <Link href="/dang-ky">Đăng ký</Link> ngay</Typography>


                        <Typography sx={
                        { 
                            
                            fontSize: {
                            xs: "0.95rem", // mobile
                            sm: "1.1  rem",   // tablet
                            md: "1.15rem", // desktop
                            lg: "1.15rem",   // large desktop
                            },
                            textAlign:{
                                xs: "center", // mobile
                                sm: "center",   // tablet
                                md: "left", // desktop
                                lg: "left",   // large desktop
                            },
                            }}> Quên mật khẩu? <Link href="/quen-mat-khau">Đổi mật khẩu</Link> </Typography>

                    </Box>
                    </form>


                </Box>
                
                
                    
            </Paper>
        </Box>
    )

}