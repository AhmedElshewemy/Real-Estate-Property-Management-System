import React from "react";
import { Button,Form } from "react-bootstrap";
import "../../css/Login.css";

const Login =()=>{
    return <div className="login-container"> 
    <h1>Login</h1>
         <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter your email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Enter Password" />
      </Form.Group>

      <Button className="btn btn-dark w-100"  variant="primary" type="submit">
        Login
      </Button>
    </Form>
    </div>;

};
export default Login;