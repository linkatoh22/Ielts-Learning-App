
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

const optionText = ["True","False","Not Given"]
export default function QuestionTF({QuestionPart,userAnswer,setUserAnswer}){

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

                <Box>
                    {
                        QuestionPart?.questionDetail.map((item,index)=>{
                            return <Box sx={{display:"flex",gap:0.5,px:1,alignItems:"center"}}>
                                    
                                    <FormControl sx={{ m: 1, minWidth: 120}}>
                                        <Select
                                        value={userAnswer[item._id]}
                                        
                                        onChange={(e)=>handleChange(item._id,e.target.value)}
                                        
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
                                
                                </Box>
                        })
                    }

                </Box>
            </Box>
        </Box>
    )
}