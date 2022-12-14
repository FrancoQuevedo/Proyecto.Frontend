import React from "react";
import "./Navbar.css";
import {Container,Nav,Navbar,NavDropdown} from 'react-bootstrap';
/* import Ejemplo from './componentes/Ejemplo/Ejemplo'; */



const Menu =()=> {

return (
<header>

<Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/"> Home </Nav.Link>
            <Nav.Link href= "/https://www.google.com.ar/maps" target= "_blank">Link</Nav.Link>
            <Nav.Link href="Contacto1">Contacto</Nav.Link>
            <Nav.Link href="Ejemplo">Ejemplo</Nav.Link> 
            <Nav.Link href="/Personajes">Personajes</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </header>
  );

};

export default Menu;