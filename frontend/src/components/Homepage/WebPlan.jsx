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
  Button,
  Grid,
  Divider
} from "@mui/material"

import styled from "styled-components"
import SubscriptionCard from "../SubscriptionCard"
const PicImg = styled.img`
    
    width:30%;
    aspect-ratio: 1 / 1;
    // object-fit: cover;
    // object-position: center;

`
export default function WebPlan(){
    return(

        <Box sx={{
            width:"100%",display:"flex",flexDirection:"column", height:"60vh", justifyContent:"center",py:3}}>

            <Box sx={{textAlign:"center",mb: 6}}>
                <Typography  
                variant="h4"
                component="h2"
                sx={{
                    fontWeight: 600,
                    color: "#333",
                    mb: 2,
                }} 
              >Chọn gói ôn luyện phù hợp với bạn </Typography>

                <Typography 
                
                    variant="body1"
                sx={{
                    color: "#666",
                    lineHeight: 1.6,
                }}
                    
                >  Hệ thống cung cấp các gói đề thi VIP, gói chấm bài tự động & gói combo tiết kiệm, giúp bạn đạt B1 - B2 - C1 dễ dàng.</Typography>
            </Box>
            
           
            <Grid container
            sx={{ p: 2, alignItems: "stretch" }}
            spacing={2}

           
            
            >

                <Grid size={4}>
                    <SubscriptionCard type={0}></SubscriptionCard>
                </Grid>

                <Grid size={4}>
                    <SubscriptionCard type={1}></SubscriptionCard>
                </Grid>

                <Grid size={4}>
                    <SubscriptionCard type={2}></SubscriptionCard>
                </Grid>
            

            </Grid>

        </Box>
    )

}