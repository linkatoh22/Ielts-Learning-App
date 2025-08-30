
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
} from "@mui/material";


import QuestionMC from "./QuestionPart/QuestionMC"
import QuestionTF from "./QuestionPart/QuestionTF"
import QuestionCP from "./QuestionPart/QuestionCP";
import QuestionMatching from "./QuestionPart/QuestionMatching";


export default function ExerciseAnswer({partOne,partTwo,partThree,userAnswer,setUserAnswer}){

    const QuestionType = (QuestionPart, SetAnswer)=>{
        switch(QuestionPart?.type){
            case("True / False/ Not Given"):
                return <QuestionTF 
                    QuestionPart={QuestionPart}
                   
                    userAnswer={userAnswer}
                    setUserAnswer={setUserAnswer}
                    ></QuestionTF>
                break;
            case("Matching"):
                return <QuestionMatching 
                    QuestionPart={QuestionPart}
                    
                    userAnswer={userAnswer}
                    setUserAnswer={setUserAnswer}
                    ></QuestionMatching>
                    break;
            case("Multiple Choice"):
                return <QuestionMC 
                    QuestionPart={QuestionPart}
                    
                    userAnswer={userAnswer}
                    setUserAnswer={setUserAnswer}
                    ></QuestionMC>
                    break;
            case("Complete Passage"):
                return <QuestionCP 
                    QuestionPart={QuestionPart}
                    
                    userAnswer={userAnswer}
                    setUserAnswer={setUserAnswer}
                    ></QuestionCP>
                    break;
            default:
                return <Box>Không có bài kiểm tra</Box>
                break;
        }
        
    }



    return(
        <Box sx={{width:"50%",p:3,height:"67vh",overflow:"auto"}} >
            <Typography variant="h6" fontWeight={"bold"} color="var(--main-blue)">Phần 1</Typography>
            
            {QuestionType(partOne)}

            <Typography variant="h6" fontWeight={"bold"} color="var(--main-blue)" >Phần 2</Typography>
            {QuestionType(partTwo)}

            <Typography variant="h6" fontWeight={"bold"} color="var(--main-blue)">Phần 3</Typography>
            {QuestionType(partThree)}

        </Box>
    )
}