import React, { useState } from "react";
import { Alert, Button,Form } from "react-bootstrap";
import "../../css/Login.css";
import { setAuthUser } from "../../helper/Storage";
import { useNavigate } from "react-router-dom"; 
import axios from "axios";
const RegisterManager =()=>{

  const navigate =useNavigate();

  const [register,setRegister]=useState({
    userName:"",
    email:"",
    password:"",
    loading:false,
    err:null,
  });

 const RegisterFun= (e)=>{
  e.preventDefault();
    setRegister({...register, loading:true,err:[]})
    axios.post("https://redsea.runasp.net/api/Account/register_manager",{
      userName:register.userName,
      email:register.email,
      password:register.password,
    }).then(res =>{
      setRegister({...register, loading:false,err:null})
      setAuthUser(res.data);
      navigate("/");

    }).catch(errors=>{
      setRegister({...register, loading:false,err: errors.response.data})

    });

 };
return <div className="login-container"> 
    <h1>Register</h1>

    {register.err!=null && (
      <Alert variant="danger" className="p-2" >
     {register.err}
    </Alert>
    )}
         <Form onSubmit={RegisterFun}>
       <Form.Group className="mb-3" >
        <Form.Control type="text" placeholder="User Name" required value={register.userName} onChange={(e)=> setRegister({...register,userName:e.target.value})} />
      </Form.Group>
   
      <Form.Group className="mb-3" >
        <Form.Control type="email" placeholder="Email" required value={register.email} onChange={(e)=> setRegister({...register,email:e.target.value})} />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Control type="password" placeholder="Password" required value={register.password} onChange={(e)=> setRegister({...register,password:e.target.value})} />
      </Form.Group>

      <Button className="btn btn-dark w-100"  variant="primary" type="submit" disabled={register.loading===true}>
      Register
      </Button>
    </Form>
    </div>;


};
export default RegisterManager;