
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
export default function PassageDisplay({passage,title}){
    return(
        <Box sx={{width:"50%",p:3,height:"70vh",overflow:"auto"}} >
            <Box sx={{textAlign:"center",mb:1}}>
                    <Typography variant="h6" sx={{fontWeight:"bold"}}>{title}</Typography>
            </Box>
            

            <Typography style={{whiteSpace: "pre-line",lineHeight:2.8,fontSize:"0.8rem"}}>
                {passage}
            </Typography>

        </Box>
    )
}