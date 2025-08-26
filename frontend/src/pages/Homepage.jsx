
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
export default function HomePage() {
  return (
  
      <Box>
          <MenuTop/>
          <WebPlan/>
      </Box>
    
    );
}