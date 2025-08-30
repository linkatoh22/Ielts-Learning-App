
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
import ClearIcon from '@mui/icons-material/Clear';
import CheckIcon from '@mui/icons-material/Check';

export default function QuestionMatching({QuestionPart,userAnswer}){
    
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
                                    value={
                                        QuestionPart?.questionMatchOption.includes(userAnswer[item._id]?.answer)
                                        ? userAnswer[item._id]?.answer
                                        : ""
                                    }
                                    disabled
                                    displayEmpty
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


                            
                            <Typography ml={2} mr={2}sx={{color: "var(--success-600)",fontWeight:"bold"}}> {userAnswer[item._id]?.correctAnswer}</Typography>

                            {userAnswer[item._id]?.isCorrect ? (
                                <CheckIcon  style={{ color: "var(--success-600)" }} />
                                ) : (
                                <ClearIcon  style={{ color: "var(--error-600)" }} />
                                )}
                        </Box>
                    })
                }
            </Box>
        </Box>
    )
}