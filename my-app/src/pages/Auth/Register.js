import React from "react";
import { Alert, Button,Form } from "react-bootstrap";
import "../../css/Login.css";

const Register =()=>{

return <div className="login-container"> 
    <h1>Register</h1>
    <Alert variant="danger" className="p-2" >
      this is simple alert
    </Alert>
         <Form>
      <Form.Group className="mb-3" >
        <Form.Control type="text" placeholder="Full Name" />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Control type="email" placeholder="Email" />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Button className="btn btn-dark w-100"  variant="primary" type="submit">
      Register
      </Button>
    </Form>
    </div>;


};
export default Register;