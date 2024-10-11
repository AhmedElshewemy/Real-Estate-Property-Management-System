import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import "../css/Header.css"

const Header =()=>{
    const Logout =()=>{

    }
    return <>  <Navbar bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand >
        <Link className="nav-link" to={'/'}> Real Estate Property Management
        </Link>
        </Navbar.Brand>
      <Nav className="me-auto">
        <Link className="nav-link" to={'constacts/1'}>Lists</Link>

        <Link className="nav-link" to={'constacts/1'}>Features</Link>

        <Link className="nav-link" to={'constacts/1'}>Pricing</Link>
        <Link className="nav-link" to={'/manage'}>Manage property</Link>
        </Nav>
      <Nav className="ms-auto">
      <Nav.Link onClick={Logout}>Logout</Nav.Link>

      </Nav>

    </Container>
  </Navbar>
  </>
  ;

};
export default Header;