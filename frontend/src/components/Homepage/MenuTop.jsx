import menuPic from "../../assets/menuPic.png"
import menu1 from "../../assets/menu.png"

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
    
    width:32%;
    // aspect-ratio: 1 / 1;
    object-fit: cover;
    

`
export default function MenuTop(){
    return(
        <Box sx={{display:"flex",
            justifyContent:"space-between",
            alignItems:"center",
            height:"90vh",
            
            width:"100%"
        }}>
            
            <Box sx={{width:"45%",display:"flex",flexDirection:"column",gap:4}}>
                <Typography variant="h1" sx={{fontWeight:"bold"}}> <span style={{color:"var(--main-blue)", fontStyle:"italic"}}>Luyện thi </span></Typography>
                <Typography variant="h1" sx={{fontWeight:"bold"}}> dễ dàng hơn!</Typography>
                <Typography variant="h5" sx={{fontWeight:400,color:"var(--grey-800)"}}>Với Learning Ielts việc ôn thi khả năng Reading và Listening dễ dàng hơn bao giờ hết. Học mọi nơi, dễ như chơi.</Typography>

                <Button variant="contained" sx={{fontWeight:"bold", width:"50%",height:"50px",fontSize:"1.2rem"}}>Luyện thi</Button>
            </Box>

            <PicImg src={menu1}>
            </PicImg>

        </Box>
    )

}