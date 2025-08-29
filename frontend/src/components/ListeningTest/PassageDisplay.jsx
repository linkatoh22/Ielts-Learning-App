
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
        <Box sx={{width:"50%",p:3,height:"70vh",overflow:"auto"}} >
            <Box sx={{textAlign:"center",mb:1}}>
                    <Typography variant="h6" sx={{fontWeight:"bold"}}>Bài nghe:</Typography>
            </Box>
            

            <audio controls>
                <source src={audio} type="audio/ogg"></source>
            </audio>

            {/* <Typography style={{whiteSpace: "pre-line",lineHeight:2.8,fontSize:"0.8rem"}}>
                {audio}
            </Typography> */}

        </Box>
    )
}