
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
import { useEffect } from "react"
export default function PassageDisplay({audio}){
    
     
    return(
        <Box sx={{width:"50%",p:3,overflow:"auto",display:"flex",alignItems:"center",flexDirection:"column"}} >

            <Box sx={{textAlign:"center",mb:1}}>
                    <Typography variant="h6" sx={{fontWeight:"bold"}}>Bài nghe:</Typography>
            </Box>

           

            <iframe 
            id="youtube-5046" frameborder="0" allowfullscreen="" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" title="Player for Practice Test 1-Part 2" width="640" height="360" src={audio}></iframe>


        </Box>
    )
}