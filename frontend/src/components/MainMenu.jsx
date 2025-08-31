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
  Button,
  Divider
} from "@mui/material"
import Logo from "../assets/logo.png"
import styled from "styled-components";
import {
  Search as SearchIcon,
  Notifications as NotificationsIcon,
  AccountCircle as AccountCircleIcon,
  Menu as MenuIcon
} from "@mui/icons-material"
import { useNavigate } from "react-router-dom";
import { useContext, useState,useEffect } from "react";
import LogoutIcon from '@mui/icons-material/Logout';
import InfoIcon from '@mui/icons-material/Info';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import { AuthContext } from "../context/authContext";
import userPic from "../assets/userPic.jpg";
import {fetchLogOut} from "../redux/thunk/authThunk"
import { useSelector,useDispatch } from "react-redux";
import { toast } from "react-toastify";

const LogoImg = styled.img`
    
    width: 7.5%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    object-position: center;
    @media (min-width: 0px) and (max-width: 399.99px) {
        width: 40px;
        height: 20px;
        
    }
    @media (min-width: 400px) and (max-width: 598.99px) {
        width: 50px;
        height: 30px;
        
    }
    @media (min-width: 599px) and (max-width: 799.99px) {
        width: 80px;
        height: 50px;
        
    }

`




export default function MainMenu() {
    const { loading,error } = useSelector(s => s.auth)
    const role = localStorage.getItem('role');
    const {fullName,email,accessToken,logout} = useContext(AuthContext);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleMenuUser = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUser = () => {
        setAnchorElUser(null);
    };

    const handleLogOut = async ()=>{

        const response = await dispatch(fetchLogOut());
        if (response.payload.status === "Success") {
                
                toast.success("Đăng xuất thành công!");
                

        } else {
           
            toast.error(`Lỗi: ${response?.payload?.message}`);
        }
        logout();
        navigate(`/dang-nhap`);
        handleCloseUser();
    }



    useEffect(() => {
        document.body.style.cursor = loading ? "wait" : "default";
        return () => {
            document.body.style.cursor = "default";
        };
    }, [loading]);

    const handleTest = (type)=>{
            if(!accessToken) toast.warning("Vui lòng đăng nhập. Để luyện thi.")
            handleClose();
            navigate(`/${type}/luyen-thi`);

    }

    return (
    
    <Box 
        
        sx={{ flexGrow: 1,position:"sticky" }}
    >
        <AppBar position="static" elevation={0}
            sx={{
                color:"var(--grey-700)",
                backgroundColor: "#ffffff",
                borderBottom: "1px solid #e0e0e0",
                py:0.5,
                transition: "margin-left 0.3s ease-in-out, width 0.3s ease-in-out"
            }}
        
        >
        <Box  sx={{width:"90%", margin:"auto"}}>
            <Toolbar>
                <Box sx={{ display:"flex",alignItems:"center",flexGrow: 1,gap:2,cursor:"pointer" }} onClick={()=>navigate("/")}>
                    <LogoImg
                        src={Logo}
                    >
                       
                    </LogoImg>

                    <Typography variant="h6" sx={{fontWeight:"bold",color:"var(--main-blue)"}}>
                            IELTS LEARNING
                    </Typography>


                </Box>


                    {
                        role=="admin"?
                        <Button color="inherit" variant="h6" sx={{fontWeight:"bold"}}  onClick={()=>navigate("/admin/dashboard")}>
                            DASHBOARD
                        </Button>
                        :
                        <>
                        </>
                    }


                
                    <Button color="inherit" variant="h6" sx={{fontWeight:"bold"}}  onClick={()=>navigate("/")}>
                        TRANG CHỦ
                    </Button>
                    

                    <div>
                        <Button 
                            color="inherit" variant="h6" sx={{fontWeight:"bold"}} 
                            onClick={handleMenu}
                            endIcon={<KeyboardArrowDownIcon></KeyboardArrowDownIcon>}
                            
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                           
                            >
                            LUYỆN THI
                            
                        </Button>


                        <Paper >
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                keepMounted
                                open={anchorEl}
                                onClose={handleClose}
                            >

                                <Box sx={{p:2,textAlign:"center"}}>

                                        <Typography sx={{fontWeight:"bold",fontStyle:"italic"}}>Luyện thi <span style={{color:"var(--main-blue)"}}>IELTS</span></Typography>
                                    </Box>

                                <Divider />


                                <MenuItem onClick={()=>handleTest("reading")} sx={{p:1.2}}>
                                    <ListItemIcon sx={{color:"var(--success-700)"}} >
                                        <AutoStoriesIcon fontSize="small" />
                                    </ListItemIcon>
                                    <ListItemText sx={{color:"var(--success-700)"}}  > Luyện thi Reading </ListItemText>    
                                    
                                </MenuItem>
                                <MenuItem onClick={()=>handleTest("listening")} sx={{p:1.2}}>
                                    <ListItemIcon sx={{color:"var(--warning-700)"}} >
                                        <HeadphonesIcon fontSize="small" />
                                    </ListItemIcon>
                                    
                                    <ListItemText sx={{color:"var(--warning-700)"}} onClick={()=>{ navigate("/listening/lich-su-thi")}} > Luyện thi Listening </ListItemText>   
                                </MenuItem>
                            </Menu>
                        </Paper>

                    </div>
                    

                    {
                        accessToken?

                        <div>
                            <Button 
                                 color="inherit" variant="h6" sx={{fontWeight:"bold"}}
                                 aria-controls="menu-user"
                                aria-haspopup="true"
                                onClick={handleMenuUser}
                                endIcon={<KeyboardArrowDownIcon></KeyboardArrowDownIcon>}>
                                <img 
                                    src={userPic}
                                    style={{
                                        cursor:"pointer",
                                        backgroundColor:"var(--success-400)",
                                        width:"35px",
                                        height:"35px",
                                        borderRadius:"100%",
                                        textAlign:"center"}}>
                                
                                </img>
                            </Button>


                            <Paper >
                                <Menu
                                    id="menu-user"
                                    anchorEl={anchorElUser}
                                    keepMounted
                                    open={anchorElUser}
                                    onClose={handleCloseUser}
                                >

                                    <Box sx={{p:2}}>

                                        <Typography sx={{fontWeight:"bold"}}>Chào {fullName} 👋</Typography>
                                    </Box>

                                    <Divider />
                                    <MenuItem onClick={()=>{ navigate("/user"); handleCloseUser;}} sx={{p:1.2}} >
                                        <ListItemIcon sx={{color:"var(--blue-700)"}} >
                                            <InfoIcon fontSize="small" />
                                        </ListItemIcon>
                                        <ListItemText sx={{fontWeight:"bold", color:"var(--blue-700)"}} > Thông tin chung </ListItemText>    
                                        
                                    </MenuItem>

                                    <MenuItem 
                                        onClick={()=>{ navigate("/reading/lich-su-thi"); handleCloseUser;}}
                                     sx={{p:1.2}}>
                                        <ListItemIcon sx={{color:"var(--success-700)"}} >
                                            <AutoStoriesIcon fontSize="small" />
                                        </ListItemIcon>
                                        
                                        <ListItemText sx={{fontWeight:"bold", color:"var(--success-700)"}} > Lịch sử thi Reading </ListItemText>   
                                    </MenuItem>

                                    <MenuItem onClick={()=>{ navigate("/listening/lich-su-thi"); handleCloseUser;}} sx={{color:"var(--warning-700)",p:1.2}} >
                                        <ListItemIcon sx={{color:"var(--warning-700)"}} >
                                            <HeadphonesIcon fontSize="small" />
                                        </ListItemIcon>
                                        
                                        <ListItemText sx={{fontWeight:"bold"}}> Lịch sử thi Listening </ListItemText>   
                                    </MenuItem>


                                    <Divider />


                                    <MenuItem onClick={handleLogOut} sx={{color:"var(--error-700)",p:1.2}}>
                                        <ListItemIcon sx={{color:"var(--error-700)"}}>
                                            <LogoutIcon fontSize="small" />
                                        </ListItemIcon>
                                        
                                        <ListItemText sx={{fontWeight:"bold"}} > Đăng xuất </ListItemText>   
                                    </MenuItem>


                                </Menu>
                            </Paper>

                        </div>
                        
                        
                        :

                        <>
                            <Button color="inherit" variant="h6" sx={{fontWeight:"bold"}} onClick={()=>navigate("/dang-ky")}  >
                                ĐĂNG KÝ
                            </Button>

                            <Button color="inherit" variant="h6" sx={{fontWeight:"bold"}} onClick={()=>navigate("/dang-nhap")} >
                                ĐĂNG NHẬP
                            </Button>
                        </>
                
                    }
                    


               
            </Toolbar>
        </Box>
        </AppBar>
    </Box>
  
)
}