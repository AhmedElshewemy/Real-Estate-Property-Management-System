import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from "react-router-dom";
import "../css/Header.css"
import { getAuthUser, removeAuthUser } from "../helper/Storage";

const Header =()=>{
  const auth=getAuthUser(); 
  const navigate =useNavigate();
    const Logout =()=>{
      removeAuthUser();
      navigate("/");
    }
    return <>  <Navbar bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand >
        <Link className="nav-link" to={'/'}> Real Estate Property Management
        </Link>
        </Navbar.Brand>
      <Nav className="me-auto">
     
        <Link className="nav-link" to={'/leases'}>Leases Details</Link>

        <Link className="nav-link" to={'myLeases'}>my Leases </Link>

        {auth && auth.roles == "Manager" && (
        <>
          <Link className="nav-link" to={'/manage'}>Manage property </Link>
        </>)}


        </Nav>
      <Nav className="ms-auto">
     {!auth && (
      <> <Link className="nav-link" to={'/register'}>Register</Link>    
      <Link className="nav-link" to={'/login'}>LogIn</Link> </>
      )}

      {auth && <>
 
      <p className="nav-link" color="white"> Hello Mr. {auth.userName}</p>
      <Nav.Link onClick={Logout}>Logout</Nav.Link>
      {auth.roles == "Manager" &&(<Link className="nav-link" to={'/registermanager'}>Add Manager</Link> )}
      </>}

      </Nav>

    </Container>
  </Navbar>
  </>
  ;

};
export default Header;