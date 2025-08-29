
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
  FormControl,
  Select,
  Button
} from "@mui/material"
import { useEffect } from "react"

export default function QuestionMatching({QuestionPart,userAnswer,setUserAnswer}){
    const handleChange=(questionId,value)=>{
        
        setUserAnswer(prev=>({
                 ...prev,
                  [questionId]: value
                })
               
            )
    }
    return(
        <Box  sx={{width:"100%"}}>
            <Box p={1}>
                <Typography fontWeight={"bold"} fontStyle={"italic"} mb={1} fontSize={"1rem"} color="var(--error-600)">{QuestionPart?.questionGuideline}</Typography>

                {
                    (QuestionPart?.questionDescription)?
                    <Typography style={{whiteSpace: "pre-line",lineHeight:1.5,fontSize:"1rem",fontWeight:400}} >
                        {QuestionPart?.questionDescription}
                    </Typography>
                    :
                    <>
                    </>
                }


                {
                    QuestionPart?.questionDetail?.map((item,index)=>{
                        return <Box display={"flex"} alignItems={"center"}>
                            <FormControl sx={{ m: 1, width: 80}}>
                                <Select
                                value={userAnswer[item._id]}
                                        
                                        onChange={(e)=>handleChange(item._id,e.target.value)}
                                
                                inputProps={{ 'aria-label': 'Without label' }}
                                >
                                    {QuestionPart?.questionMatchOption?.map((opt, index) => (
                                        <MenuItem key={index} value={opt}>
                                        {opt}
                                        </MenuItem>
                                    ))}

                                </Select>
                            </FormControl>
                            <Typography>{item?.questionText}</Typography>
                        </Box>
                    })
                }
            </Box>
        </Box>
    )
}