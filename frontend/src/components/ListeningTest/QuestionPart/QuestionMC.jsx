
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
export default function QuestionMC({QuestionPart,userAnswer,setUserAnswer}){

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
                <Typography fontWeight={"bold"} fontStyle={"italic"} mb={1} color="var(--error-600)">{QuestionPart?.questionGuideline}</Typography>
                {
                    QuestionPart?.questionDetail?.map((item,index)=>{
                            return <Box px={2} mb={1}>
                                        <Typography fontWeight={550} fontSize={"1rem"} >{item.questionText}?</Typography>
                                        <Box>
                                            {
                                                item?.optionText.map((it,index)=>{
                                                    return <Box sx={{display:"flex",gap:0.5,px:1,alignItems:"center"}}>
                                                            <Radio
                                                                checked={userAnswer[item._id] === answerOption[index]}
                                                                onChange={()=>handleChange(item._id,answerOption[index])}
                                                                value={answerOption[index]}
                                                                name={index}
                                                                // inputProps={{ 'aria-label': 'A' }}
                                                            />
                                                            <Typography fontSize={"0.9rem"}  fontWeight={"bold"}>{answerOption[index]}.   </Typography>
                                                            <Typography fontSize={"0.9rem"} > {it}</Typography>
                                                        
                                                        </Box>
                                                })
                                            }

                                        </Box>
                                    </Box>
                    })
                }
            </Box>
        </Box>
    )
}