import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Homepage";
import RootLayout from "./Layout";
import theme from "./theme";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "@mui/material/styles";
import { LogInPage } from "./pages/Loginpage";
import { SignupPage } from "./pages/SignupPage";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>


            <Routes>
              <Route element={<RootLayout/>}>
                  <Route path="/" element={<Home />} />
                  <Route path="/dang-nhap" element={<LogInPage />} />
                  <Route path="/dang-ky" element={<SignupPage />} />

              </Route>
              
            
            </Routes>


      </BrowserRouter>
      <ToastContainer />
  </ThemeProvider>
   
  );
}

export default App;
