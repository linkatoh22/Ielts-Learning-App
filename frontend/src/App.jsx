import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Homepage";
import RootLayout from "./Layout";
import theme from "./theme";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "@mui/material/styles";
import { LogInPage } from "./pages/Loginpage";
import { SignupPage } from "./pages/SignupPage";
import { store } from './redux/store'
import { Provider } from 'react-redux';
import {AuthProvider} from  "./context/authContext"
import GoogleSuccessPage from "./pages/GoogleSuccessPage";
import { ForgetPasswordPage } from "./pages/ForgetPasswordPage";
function App() {
  return (
    
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <BrowserRouter>


                <Routes>
                  <Route element={<RootLayout/>}>
                      <Route path="/" element={<Home />} />
                      <Route path="/dang-nhap" element={<LogInPage />} />
                      <Route path="/dang-ky" element={<SignupPage />} />
                      <Route path="/quen-mat-khau" element={<ForgetPasswordPage />} />

                  </Route>
                     <Route path="/google-success" element={<GoogleSuccessPage />} />
                
                </Routes>


          </BrowserRouter>
        </AuthProvider>
        <ToastContainer />
      </ThemeProvider>
   </Provider>
  );
}

export default App;
