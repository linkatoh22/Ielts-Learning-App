
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
  Radio
} from "@mui/material"
const answerOption = ["A","B","C","D"]
import ClearIcon from '@mui/icons-material/Clear';
import CheckIcon from '@mui/icons-material/Check';
export default function QuestionMC({QuestionPart,userAnswer}){
    return(
        <Box  sx={{width:"100%"}}>
            <Box p={1}>
                <Typography fontWeight={"bold"} fontStyle={"italic"} mb={1} color="var(--error-600)">{QuestionPart?.questionGuideline}</Typography>
                {
                    QuestionPart?.questionDetail?.map((item,index)=>{
                            return <Box px={2} mb={1}>
                                        <Typography fontWeight={500} fontSize={"1rem"} >{item.questionText}?</Typography>
                                        <Box>
                                            {
                                                item?.optionText.map((it,index)=>{
                                                    return <Box sx={{display:"flex",gap:0.5,px:1,alignItems:"center"}}>
                                                            <Radio
                                                                disabled
                                                                checked={userAnswer[item._id]?.answer == answerOption[index]}
                                                                // onChange={handleChange}
                                                                // value="a"
                                                                // name="radio-buttons"
                                                                // inputProps={{ 'aria-label': 'A' }}
                                                            />
                                                            <Typography fontSize={"0.9rem"}  fontWeight={"bold"}>{answerOption[index]}.   </Typography>
                                                            <Typography fontSize={"0.9rem"} > {it}</Typography>
                                                        
                                                        </Box>
                                                })
                                            }

                                        </Box>
                                        
                                        <Box display={"flex"} alignItems={"center"}>
                                             <Typography ml={2} mr={2}sx={{fontWeight:"bold"}}> Đáp án:</Typography>
                                            <Typography ml={2} mr={2}sx={{color: "var(--success-600)",fontWeight:"bold"}}> {(userAnswer[item._id]?.correctAnswer)}</Typography>
                                            {userAnswer[item._id]?.isCorrect ? (
                                                <CheckIcon  style={{ color: "var(--success-600)" }} />
                                                ) : (
                                                <ClearIcon  style={{ color: "var(--error-600)" }} />
                                                )}
                                        </Box>


                                    </Box>
                    })
                }
            </Box>
        </Box>
    )
}