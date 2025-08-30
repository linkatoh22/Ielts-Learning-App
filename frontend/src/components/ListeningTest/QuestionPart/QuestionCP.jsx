
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


export default function QuestionCP({QuestionPart,userAnswer,setUserAnswer}){

    const handleChange=(questionId,value)=>{
        setUserAnswer(prev=>({
                 ...prev,
                  [questionId]: value
                })
               
            )
    }


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
                            <TextField
                            variant="standard"
                            size="small"
                            value={userAnswer[QuestionPart?.questionDetail[index]?._id]??""}
                            onChange={(e) => handleChange(QuestionPart?.questionDetail[index]?._id, e.target.value)}
                            sx={{ mx: 1, width: 100 }}
                            />
                        )}
                        </span>
                    ))}
                </Typography>


            </Box>

        </Box>
    )
}