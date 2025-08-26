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

        <Box sx={{width:"100%",display:"flex",flexDirection:"column",alignItems:"center"}}>
            <Typography>Các gói cước của website chúng tôi</Typography>
            <Divider sx={{ my: 2 }}></Divider>
            <Grid container 
            spacing={10}
            // sx={{display:"flex",justifyContent:"space-between",flexWrap:"wrap"}}
            
            >

                <Grid size={4}>
                    <SubscriptionCard type={"Free"}></SubscriptionCard>
                </Grid>

                <Grid size={4}>
                    <SubscriptionCard type={"Month"}></SubscriptionCard>
                </Grid>

                <Grid size={4}>
                    <SubscriptionCard type={"3 Months"}></SubscriptionCard>
                </Grid>
            

            </Grid>

        </Box>
    )

}