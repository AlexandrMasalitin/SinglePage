import React, { Component } from "react";
import {
     Navbar, Container, Offcanvas, 
     Nav
     } from "react-bootstrap";



export default class Header extends Component {
  render() {
    return (

            <Navbar expand='sm' bg="dark" variant="dark" className="mb-3" fixed="top">
              <Container fluid>

                <Navbar.Brand>
                <Nav.Link  href="/"><span className="color-brand"> Alexandr  Masalitin </span></Nav.Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='offcanvasNavbar' />
                <Navbar.Offcanvas
                  id='offcanvasNavbar'
                  aria-labelledby='offcanvasNavbarLabel'
                  placement="end"
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title className="text" >
                      Menu
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                      <Nav.Link  href="#About">About</Nav.Link>
                      <Nav.Link  href="/#Projects">Projects</Nav.Link>
                      <Nav.Link  href="/#Contact">Contact</Nav.Link>
                    </Nav>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Container>
            </Navbar>
        );
  }
}
