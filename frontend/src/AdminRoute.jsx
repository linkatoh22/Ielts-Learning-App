import { Navigate,Outlet } from "react-router-dom";


const AdminRoute = ()=>{
    const accessToken = localStorage.getItem('accessToken');
    const role = localStorage.getItem('role');
    return accessToken&&role ? <Outlet/> : <Navigate to="/dang-nhap" replace/>
}

export default AdminRoute;