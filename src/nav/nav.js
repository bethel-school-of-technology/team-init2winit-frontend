import React from 'react'
import './nav.css'
import { Navbar, Nav, FormControl, Form, Button } from 'react-bootstrap';




function nav() {
    
  return (
    <nav>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">JavaShare</Navbar.Brand>
          <Nav className="mr-auto" id="tabs">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Near You</Nav.Link>
            <Nav.Link href="#pricing">Share</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
      </Navbar>
      
    </nav>
  )
};


export default nav
