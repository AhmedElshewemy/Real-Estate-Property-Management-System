import App from "./App";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Home from "./pages/home/Home";
import { createBrowserRouter, Navigate } from "react-router-dom";
import ProductDetails from "./pages/product/ProductDetails";
import RemovePropertie from "./pages/manage/RemovePropertie";
import UpdatePropertie from "./pages/manage/UpdatePropertie";
import AddPropertie from "./pages/manage/AddPropertie";
import ManagePropertie from "./pages/manage/ManagePropertie";
import AddReportIssue from "./pages/tenants/AddReportIssue";
import Print from "./pages/tenants/Print";
import Tenant from "./middleware/Tenant";
import Manager from "./middleware/Manager";
import LeasesDetails from "./pages/Lease/LeasesDetails";

import AddLease from "./pages/Lease/AddLease";
import RegisterManager from "./pages/Auth/RegisterManager";

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
    element:<Tenant />,
    children:[
        {
            path:"/login",
            element:<Login />,
            },
            {
            path:"/register",
            element:<Register />,
            },
          
    ]
   },

   {
    element:<Manager />,
    children:[
        {
            path:"/registermanager",
            element:<RegisterManager/>,
        },
    ],
   
},
    

   {
    path:"/leases",
    element:<Manager />,
    children:[
        {
            path:'',
            element:<LeasesDetails/>,
        },
        {
            path:'addLeases',
            element:<AddLease/>
        },
    ],
   
},
    {
        path:"/manage",
        element:<Manager />,
        children:[
            {
                path:'',
                element:<ManagePropertie/>,
            },
            {
                path:'addProperti',
                element:<AddPropertie/>,
            },
            {
                path:':id',
                element:<UpdatePropertie/>,
            },  {
                path:'removePropertie',
                element:<RemovePropertie/>,
            },

        ],
       
   },


   {
    path:"/tenants",
    children:[
        {
            path:'',
            element:<Print/>,
        },
        {
            path:'adAddReportIssue',
            element:<AddReportIssue/>,
        },

    ],
   }
   ,

   ],
   },
   {
    path:"*",
    element:<Navigate to={"/"}/>
   }
   

]);