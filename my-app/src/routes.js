import App from "./App";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Home from "./pages/home/Home";
import { createBrowserRouter, Navigate } from "react-router-dom";
import ProductDetails from "./pages/product/ProductDetails";
import Remove from "./pages/manage/Remove_p";
import Update from "./pages/manage/Update_p";
import Add from "./pages/manage/Add_P";
import Manage from "./pages/manage/Manage";


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
        path:":id",
        element:<ProductDetails />,
    },
    {
    path:"/login",
    element:<Login />,
    },
    {
    path:"/register",
    element:<Register />,
    },

    {
        path:"/manage",
        children:[
            {
                path:'',
                element:<Manage/>,
            },
            {
                path:'add',
                element:<Add/>,
            },
            {
                path:'update',
                element:<Update/>,
            },  {
                path:'remove',
                element:<Remove/>,
            },

        ],
       
   },

   ],
   },
   {
    path:"*",
    element:<Navigate to={"/"}/>
   }
   

]);