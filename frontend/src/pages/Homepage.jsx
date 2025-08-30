
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
import { initGA,trackPageView } from "../analytics";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
export default function HomePage() {

  const location = useLocation();

  useEffect(() => {
    initGA();
  }, []);

  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location]);


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