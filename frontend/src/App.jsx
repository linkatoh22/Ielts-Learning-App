import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
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
import ListeningHistoryPage from "./pages/ListeningHistoryPage";
import HistoryReadingMenuPage from "./pages/HistoryMenuReadingPage";
import HistoryListeningMenuPage from "./pages/HistoryMenuListeningPage";
import UserPage from "./pages/UserPage";
import { ChangePasswordPage } from "./pages/ChangePasswordPage";
import { AdminDashboardPage } from "./pages/AdminDashboardPage";
import AdminRoute from "./AdminRoute";
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
                      <Route path="/doi-mat-khau/:tokenId" element={<ChangePasswordPage />} />

                      

                  </Route>

                  <Route element={<PrivateRoute/>}>
                        <Route element={<RootLayout/>}>
                            <Route path="/reading/luyen-thi" element={<SelectReadingPage />} />
                            <Route path="/listening/luyen-thi" element={<SelectListeningPage />} />

                            <Route path="/reading/thi/:examId" element={<ReadingTestPage />} />
                            <Route path="/listening/thi/:examId" element={<ListeningTestPage/>} />

                            <Route path="/reading/lich-su-thi/:examId" element={<ReadingHistoryPage />} />
                            <Route path="/listening/lich-su-thi/:examId" element={<ListeningHistoryPage />} />
                            <Route path="/reading/lich-su-thi" element={<HistoryReadingMenuPage />} />
                            <Route path="/listening/lich-su-thi" element={<HistoryListeningMenuPage />} />
                            <Route path="/user" element={<UserPage />} />
                            
                        </Route>
                  </Route>

                  <Route element={<AdminRoute/>}>
                        <Route element={<RootLayout/>}>
                              <Route  path="/admin/dashboard" element={<AdminDashboardPage />} ></Route>
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
