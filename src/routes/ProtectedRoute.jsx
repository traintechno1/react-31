import {Navigate, Outlet} from "react-router-dom";

export const ProtectedRoute = () =>{
    const userToken = localStorage.getItem("token");
    if(!userToken){
        return <Navigate to='login'></Navigate>
    }else{
        return <Outlet />;
    }
}