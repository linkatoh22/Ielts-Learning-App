import {Box,Grid,Typography,TextField,InputAdornment,Button, Link } from "@mui/material"
// import SignUpPic from "../../assets/pic/signUpPic.jpg"
import styled from "styled-components";
import { GoogleSVG } from "../assets/googleSvg";
import { Person, PersonOutline, AlternateEmail, Lock, Visibility, VisibilityOff } from "@mui/icons-material"
import LockOutlineIcon from '@mui/icons-material/LockOutline';
import { toast } from "react-toastify";
import BadgeIcon from '@mui/icons-material/Badge';
import { useEffect, useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { fetchSignUp } from "../redux/thunk/authThunk";
import { useNavigate } from "react-router-dom";
const GoogleIcon  = styled.div`

    display:flex;
    align-items:center;
    justify-content:center;
    cursor: pointer;
  
`
export function SignupPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const { loading,error } = useSelector(s => s.auth)
    
    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        password: "",
        confirmPassword: "",
      })
    
    

    const handleInputChange = (key,value) => {
    setFormData((prev) => ({
        ...prev,
        [key]:value
    }))
    }


    const handleSubmit = async (event) => {
        event.preventDefault()
        console.log("formData: ",formData)
        if(formData.password.trim() != formData.confirmPassword.trim()){
            
            toast.error("Lỗi: Mật khẩu xác nhận không khớp.")
            return;
        }

      
        const response = await dispatch(fetchSignUp(formData));
        if (response.payload.status === "Success") {

            
             const newUserId = response.payload.data.userId;
           
            toast.success("Đăng ký thành công! Vui lòng đăng nhập...");
            navigate(`/dang-nhap`);

        } else {
           
            toast.error(`Lỗi: ${response?.payload?.message}`);
        }
        

        
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
                    height:"80vh",
                    py:5,
                    backgroundColor:"var(--grey-100)",
                    backgroundAttachment: "fixed",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
            <Box sx={{
                 width: "50%",
                    backgroundColor: "white",
                    borderRadius: "20px",

                    display: "flex",
                    alignItems:"center",
                    justifyContent:"center",

                py:2,
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
                        
                        }>Đăng Ký</Typography>
                    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                        <Box sx={{ display: "flex", flexDirection: "column",  gap:{ xs: 1, sm: 1.5, md: 2,lg: 2.5 } }}>
                            
                           


                            
                            <TextField
                            required
                            fullWidth
                            placeholder="Nhập họ tên của bạn"
                            
                            value={formData.fullname}
                            onChange={(e)=>handleInputChange("fullname",e.target.value)}
                            InputProps={{
                                startAdornment: (
                                <InputAdornment position="start">
                                    <Person sx={{ color: "black" }} />
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
                            required
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
                            required
                            type="password"
                            fullWidth
                            placeholder="Nhập mật khẩu"
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
                            required
                            fullWidth
                            type="password"
                            placeholder="Nhập mật khẩu xác nhận"
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
                                    sm: "1.1rem",   // tablet
                                    md: "1.1rem", // desktop
                                    lg: "1.5rem",   // large desktop
                                },
                                
                               
                                boxShadow: "none",
                                
                            }}
                            variant="contained"
                            >
                                {loading? "Đang xử lý..." : "Đăng ký"}
                            
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
                                                    <div> Hoặc đăng ký với </div> 
                        
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
                                }}> Đã có tài khoản? <Link href="/dang-nhap">Đăng nhập</Link> ngay</Typography>

                        </Box>
                    </form>


                </Box>

                    
            </Box>
        </Box>
    )
}