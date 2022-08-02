import React from 'react'
import {Container, Nav, Navbar} from "react-bootstrap";

export function Navigation(){
  return(
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/about">About Us</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}