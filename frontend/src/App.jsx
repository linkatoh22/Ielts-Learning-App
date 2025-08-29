import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Homepage";
import RootLayout from "./Layout";
import theme from "./theme";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "@mui/material/styles";
import { LogInPage } from "./pages/LoginPage";
import { SignupPage } from "./pages/SignupPage";
import { store } from './redux/store'
import { Provider } from 'react-redux';
import {AuthProvider} from  "./context/authContext"
import GoogleSuccessPage from "./pages/GoogleSuccessPage";
import { ForgetPasswordPage } from "./pages/ForgetPasswordPage";
import { SelectReadingPage } from "./pages/ReadingTestSelectPage";
import { SelectListeningPage } from "./pages/ListeningTestSelectPage";
import ReadingTestPage from "./pages/ReadingTestPage";
import PrivateRoute from "./PrivateRoute";
import ReadingHistoryPage from "./pages/ReadingHistoryPage";
import ListeningTestPage from "./pages/ListeningTestPage";
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

                  <Route element={<PrivateRoute/>}>
                        <Route element={<RootLayout/>}>
                          <Route path="/reading/luyen-thi" element={<SelectReadingPage />} />
                           <Route path="/listening/luyen-thi" element={<SelectListeningPage />} />

                           <Route path="/reading/thi/:examId" element={<ReadingTestPage />} />
                           <Route path="/listening/thi/:examId" element={<ListeningTestPage/>} />

                           <Route path="/reading/lich-su-thi/:examId" element={<ReadingHistoryPage />} />
                        </Route>
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
