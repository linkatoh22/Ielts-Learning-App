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
import Logo from "../assets/logo.png"
import styled from "styled-components";
import {
  Search as SearchIcon,
  Notifications as NotificationsIcon,
  AccountCircle as AccountCircleIcon,
  Menu as MenuIcon
} from "@mui/icons-material"
import { useNavigate } from "react-router-dom";
import { useState } from "react";


import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import HeadphonesIcon from '@mui/icons-material/Headphones';
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
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


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
                <Box sx={{ display:"flex",alignItems:"center",flexGrow: 1,gap:2 }}>
                    <LogoImg
                        src={Logo}
                    
                       
                    >
                       
                    </LogoImg>

                    <Typography variant="h6" sx={{fontWeight:"bold"}}>
                            IELTS LEARNING
                    </Typography>


                </Box>



                
                    <Button color="inherit" variant="h6" sx={{fontWeight:"bold"}}  >
                        TRANG CHỦ
                    </Button>
                    

                    <div>
                        <Button 
                            color="inherit" variant="h6" sx={{fontWeight:"bold"}} 
                            onClick={handleMenu}
                            endIcon={<KeyboardArrowDownIcon></KeyboardArrowDownIcon>}
                            aria-label="account of current user"
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
                                <MenuItem onClick={handleClose}>
                                    <ListItemIcon>
                                        <AutoStoriesIcon fontSize="small" />
                                    </ListItemIcon>
                                    <ListItemText> Luyện thi Reading </ListItemText>    
                                    
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <ListItemIcon>
                                        <HeadphonesIcon fontSize="small" />
                                    </ListItemIcon>
                                    
                                    <ListItemText> Luyện thi Listening </ListItemText>   
                                </MenuItem>
                            </Menu>
                        </Paper>

                    </div>
                    
                    <Button color="inherit" variant="h6" sx={{fontWeight:"bold"}} >
                        ĐĂNG KÝ
                    </Button>

                    <Button color="inherit" variant="h6" sx={{fontWeight:"bold"}} >
                        ĐĂNG NHẬP
                    </Button>


               
            </Toolbar>
        </Box>
        </AppBar>
    </Box>
  
)
}