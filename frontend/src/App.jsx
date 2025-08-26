import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Homepage";
import RootLayout from "./Layout";
import theme from "./theme";

import { ThemeProvider } from "@mui/material/styles";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>


            <Routes>
              <Route element={<RootLayout/>}>
                  <Route path="/" element={<Home />} />

              </Route>
              
            
            </Routes>


      </BrowserRouter>
  </ThemeProvider>
   
  );
}

export default App;
