// eslint-disable-next-line no-unused-vars
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navbar1() {
  return (
    <Navbar expand="lg" className="bg-body-tertiar" style={{backgroundColor:'white'}}>
      <Container>
        <Navbar.Brand><Link to="/" style={{ textDecoration: 'none', color: 'black' }}>Ishaara_Ai</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/Translate" style={{ textDecoration: 'none', color: 'black' }}>Translate</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/Pricing" style={{ textDecoration: 'none', color: 'black' }}>Pricing</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/About" style={{ textDecoration: 'none', color: 'black' }}>About</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar1;
