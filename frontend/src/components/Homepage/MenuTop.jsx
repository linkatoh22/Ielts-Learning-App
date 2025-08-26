import menuPic from "../../assets/menuPic.png"


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

import styled from "styled-components"

const PicImg = styled.img`
    
    width:30%;
    aspect-ratio: 1 / 1;
    // object-fit: cover;
    // object-position: center;

`
export default function MenuTop(){
    return(
        <Box sx={{display:"flex",gap:7,justifyContent:"space-around",alignItems:"center",height:"90vh",margin:"auto",width:"100%"}}>
            
            <Box sx={{width:"40%",display:"flex",flexDirection:"column",gap:4}}>
                <Typography variant="h1" sx={{fontWeight:"bold"}}>Luyện thi dễ dàng hơn!</Typography>
                <Typography variant="h4" sx={{fontWeight:350,color:"var(--grey-800)"}}>Với Learning Ielts việc ôn thi khả năng Reading và Listening dễ dàng hơn bao giờ hết. Học mọi nơi, dễ như chơi.</Typography>

                <Button variant="contained" >Luyện thi</Button>
            </Box>

            <PicImg src={menuPic}>
            </PicImg>

        </Box>
    )

}