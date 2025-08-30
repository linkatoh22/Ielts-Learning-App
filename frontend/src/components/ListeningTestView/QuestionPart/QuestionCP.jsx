
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

import ClearIcon from '@mui/icons-material/Clear';
import CheckIcon from '@mui/icons-material/Check';

export default function QuestionCP({QuestionPart,userAnswer}){

    const parts = QuestionPart?.questionPassage?.split("[INPUT]")
    return(
        <Box  sx={{width:"100%"}}>
            <Box p={1}>
                <Typography fontWeight={"bold"} fontStyle={"italic"} mb={1} fontSize={"1rem"} color="var(--error-600)">{QuestionPart?.questionGuideline}</Typography>
            

                {/* <Typography mb={1} >{QuestionPart?.questionDescription}</Typography> */}

                <Typography mb={1}>
                    {parts?.map((part, index) => (
                        <span key={index}>
                        {part}
                        {index < parts.length - 1 && (
                         
                        <Box display={"flex"}>
                            <TextField
                            
                            disabled
                            value={userAnswer[QuestionPart?.questionDetail[index]?._id]?.answer??""}
                            variant="standard"
                            size="small"
                            onChange={(e) => SetAnswer?.(index, e.target.value)}
                            sx={{ mx: 1, width: 100 }}
                            />
                                <Box display={"flex"} alignItems={"center"}>
                                    {userAnswer[QuestionPart?.questionDetail[index]?._id]?.isCorrect ? (
                                        <CheckIcon  style={{ color: "var(--success-600)" }} />
                                        ) : (
                                        <ClearIcon  style={{ color: "var(--error-600)" }} />
                                        )}

                                    <Typography style={{ color: "var(--success-600)",fontWeight:"bold" }}>
                                            {userAnswer[QuestionPart?.questionDetail[index]?._id]?.correctAnswer}
                                    </Typography>

                                    
                                </Box>
                            </Box>
                         
                        )}
                        </span>
                    ))}
                </Typography>


            </Box>

        </Box>
    )
}