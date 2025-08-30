
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
import WebPlan from "../components/Homepage/WebPlan";
import MenuTop from "../components/Homepage/MenuTop";
import ServicesSection from "../components/Homepage/ServiceSection";
export default function HomePage() {
  return (
      // <Box sx={{width:"100%"}}>
        <Box sx={{width:"80%",px:3,display:"flex",flexDirection:"column",gap:4,margin:"auto"}}>
            <MenuTop/>
            <ServicesSection/>
            {/* <WebPlan/> */}
            
        </Box>
      // </Box>
    );
}