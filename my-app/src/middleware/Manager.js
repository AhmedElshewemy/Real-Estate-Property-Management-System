import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getAuthUser } from "../helper/Storage";


const Manager =()=>{
    const auth= getAuthUser();
    return <> {auth && auth.roles == "Manager" ? <Outlet/> : <Navigate to={"/"}/>}</>;

}
export default Manager;