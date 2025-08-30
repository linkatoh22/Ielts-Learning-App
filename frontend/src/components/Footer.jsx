import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  IconButton,
} from "@mui/material"
import facebook from "../assets/facebook.webp"
import zalo from "../assets/zalo.png"
import messenger from "../assets/messenger.png"
import styled from "styled-components"

const ImgButton = styled.img`
    width:30px;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    cursor:pointer;
`
export default function Footer() {
  return (
  
    <Box sx={{width:"100%",color:"white", backgroundColor:"#1976d2",height:"10.5vh",display:"flex",alignItems:"center", justifyContent:"center"}}>
      <Box sx={{p:2, display:"flex",alignItems:"center",justifyContent:"space-between",width:"80%",margin:"auto"}}>

        <Box>
          <Typography> © 2025 Learning IELTS. All rights reserved. Ho Chi Minh City</Typography>
        </Box>

        {/* <Box sx={{display:"flex", gap:3, alignItems:"center"}}>
          <Typography sx={{fontWeight:"bold"}}> Liên hệ:</Typography>

          <ImgButton src={facebook} ></ImgButton>
          <ImgButton src={zalo}></ImgButton>
          <ImgButton src={messenger}></ImgButton>
        </Box> */}


      

      </Box>
    </Box>

  )
}