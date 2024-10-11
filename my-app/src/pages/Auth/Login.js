import React from "react";
import { Alert, Button,Form } from "react-bootstrap";
import "../../css/Login.css";

const Login =()=>{
    return <div className="login-container"> 
    <h1>Login</h1>
    
    <Alert variant="danger" className="p-2" >
      this is simple alert
    </Alert>

         <Form>
      <Form.Group className="mb-3">
        <Form.Control type="email" placeholder="Enter your email" />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Control type="password" placeholder="Enter password" />
      </Form.Group>

      <Button className="btn btn-dark w-100"  variant="primary" type="submit">
        Login
      </Button>
    </Form>
    </div>;

};
export default Login;