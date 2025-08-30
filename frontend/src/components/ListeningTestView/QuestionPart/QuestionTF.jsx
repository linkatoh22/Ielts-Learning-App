
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
  FormControl,
  Select
} from "@mui/material"
import ClearIcon from '@mui/icons-material/Clear';
import CheckIcon from '@mui/icons-material/Check';
const optionText = ["True","False","Not Given"]
export default function QuestionTF({QuestionPart,userAnswer}){
    return(
        <Box  sx={{width:"100%"}}>
            <Box p={1}>
                <Typography fontWeight={"bold"} fontStyle={"italic"} mb={1} fontSize={"1rem"} color="var(--error-600)">{QuestionPart?.questionGuideline}</Typography>

                <Box>
                    {
                        QuestionPart?.questionDetail.map((item,index)=>{
                            return <Box sx={{display:"flex",gap:0.3,px:1,alignItems:"center"}}>
                                    
                                    <FormControl sx={{ m: 1, minWidth: 100}}>
                                        <Select
                                        value={userAnswer[item._id].answer}
                                        disabled
                                        // onChange={handleChange}
                                        
                                        inputProps={{ 'aria-label': 'Without label' }}
                                        >
                                            {optionText.map((opt, index) => (
                                                <MenuItem key={index} value={opt}>
                                                {opt}
                                                </MenuItem>
                                            ))}

                                        </Select>
                                    </FormControl>

                                    <Typography fontSize={"0.9rem"} > {item.questionText}</Typography>



                                    <Box display={"flex"} alignItems={"center"}>
                                        {userAnswer[item._id]?.isCorrect ? (
                                            <CheckIcon  style={{ color: "var(--success-600)" }} />
                                            ) : (
                                            <ClearIcon  style={{ color: "var(--error-600)" }} />
                                            )}

                                        <Typography ml={1} sx={{color: "var(--success-600)",fontWeight:"bold"}}> {(userAnswer[item._id]?.correctAnswer)}</Typography>
                                        
                                    </Box>
                                
                                </Box>
                        })
                    }

                </Box>
            </Box>
        </Box>
    )
}