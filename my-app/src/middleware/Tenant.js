import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getAuthUser } from "../helper/Storage";


const Tenant =()=>{
    const auth= getAuthUser();
    return <> {!auth ? <Outlet/> : <Navigate to={"/"}/>}</>;

}
export default Tenant;