import React, { useState} from "react";
import { Alert, Button,Form } from "react-bootstrap";
import "../../css/Login.css";
import axios from "axios";
import { setAuthUser } from "../../helper/Storage";
import { useNavigate } from "react-router-dom";

 

const Login =()=>{

 const navigate =useNavigate();

  const [login,setLogin]=useState({
    email:"",
    password:"",
    loading:false,
    err:null,
  });

 const LoginFun= (e)=>{
  e.preventDefault();
    setLogin({...login, loading:true,err:null})
    axios.post("https://redsea.runasp.net/api/Account/login",{
      email:login.email,
      password:login.password,
    }).then(res =>{
      setLogin({...login, loading:false,err:null})
      setAuthUser(res.data);
      navigate("/");

    }).catch(errors=>{
      setLogin({...login, loading:false,err: errors.response.data})

    });

 };
    return <div className="login-container"> 
    <h1>Login</h1>
    {/* {login.err.map((error ,index)=>(
      <Alert key={index} variant="danger" className="p-2" >
     {error}
    </Alert>
    ))} */}

{login.err!=null && (
      <Alert variant="danger" className="p-2" >
     {login.err}
    </Alert>
    )}
    

         <Form onSubmit={LoginFun}>
      <Form.Group className="mb-3">
        <Form.Control type="email" placeholder="Enter your email" required value={login.email} onChange={(e)=> setLogin({...login,email:e.target.value})} />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Control type="password" placeholder="Enter password" required value={login.password} onChange={(e)=> setLogin({...login,password:e.target.value})} />
      </Form.Group>

      <Button className="btn btn-dark w-100"  variant="primary" type="submit" disabled={login.loading===true}>
        Login
      </Button>
    </Form>
    </div>;

};
export default Login;