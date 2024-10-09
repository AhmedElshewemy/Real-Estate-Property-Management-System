import App from "./App";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Home from "./pages/home/Home";
import { createBrowserRouter, Navigate } from "react-router-dom";
export const routes= createBrowserRouter([
   {
    path:"",
    element:<App/>,
    children:
    [

    {
        path:"/",
        element:<Home />,
    },
    {
    path:"/login",
    element:<Login />,
    },
    {
    path:"/resgister",
    element:<Register />,
    },

   ],
   },
   {
    path:"*",
    element:<Navigate to={"/"}/>
   }
   

]);