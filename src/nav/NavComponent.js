import React from 'react'
import './nav.css'
import { Link } from 'react-router-dom';
import { Navbar, Nav, FormControl, Form, Button } from 'react-bootstrap';
import CoffeLogo from './coffeelogo.png';


function NavComponent() {

  const logoutHandler = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('username');
    window.location = '/login';
  }

  return (
    <nav>
      <Navbar bg="dark" variant="dark" className="nav">
        <Navbar.Brand >
          <Link to="/">
            <img src={CoffeLogo} className="logo" alt="Java Share" />
          </Link>
        </Navbar.Brand>
        <Nav className="mr-auto" id="tabs">
          <Link to="/" className="nav-links">Home</Link>
          <Link to="/map" className="nav-links">Near You</Link>
          <Link to="/generator" className="nav-links">Find A Cup</Link>
        </Nav>
        <Form inline>
          {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" /> */}
          <Button onClick={logoutHandler} variant="outline-info">Logout</Button>
        </Form>
      </Navbar>

    </nav>
  )
};


export default NavComponent
