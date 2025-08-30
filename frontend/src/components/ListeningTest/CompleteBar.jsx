
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

export function CompleteBar({userAnswer}){
   useEffect(()=>{
        console.log("userAnswer: ",userAnswer)
    },[userAnswer])
    return(
        <Box display={"flex"} flexWrap={"wrap"} gap={2}>
            {Object.entries(userAnswer || {}).map(([key, value], index) => (
                <Box
                    key={key}
                    sx={{
                    width: 50,
                    height: 50,
                    
                    border: "1px solid #e0e0e0",
                    borderRadius: "100%",
                    display: "flex",
                    alignItems: "center",
                    
                    justifyContent: "center",
                    backgroundColor: value ? "var(--success-600)" : "#ffffff",
                    transition: "all 0.2s ease-in-out",
                    }}
                >
                    <Typography
                    variant="body1"
                    sx={{
                        fontWeight: 500,
                        color: "#666666",
                        fontSize: "16px",
                        fontWeight:"bold",
                        color: value ? "white" : "",
                    }}
                    >
                    {index + 1}
                    </Typography>
                </Box>
                ))}

            

        </Box>
    )
}