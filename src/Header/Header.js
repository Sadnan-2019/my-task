import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";



const Header = () => {
     return (
          <>
      <Navbar
        collapseOnSelect
        expand="lg"
        sticky="top"
        bg="dark"
        variant="white"
      >
        <Container className="text-light">
          <Navbar.Brand as={Link} to="/">
            {/* <img src={logo} alt="" height={30} href="home#slider" /> */}
            <p>amer sonar</p>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="bg-success text-light"
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="home" className="text-light">
                Home
              </Nav.Link>
              <Nav.Link href="home#services" className="text-light">
                Services
              </Nav.Link>
              <Nav.Link href="home#experts" className="text-light">
                Experts
              </Nav.Link>
              <NavDropdown
                title="Dropdown"
                id="collasible-nav-dropdown"
                className="text-light"
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/about" className="text-light">
                About
              </Nav.Link>

                {
                 
                 <>
                  <Nav.Link as={Link} to="/addservice" className="text-light">
                  Add Service
                </Nav.Link>
                <Nav.Link as={Link} to="/manage" className="text-light">
                  Manage Service
                </Nav.Link>
                <Nav.Link as={Link} to="/order" className="text-light">
                  Order
                </Nav.Link>
                 </>
                }


              <div className="d-flex align-items-center me-2">
              
                {/* <span>{user ? user?.email : ""}</span> */}
              </div>
              
                <button className="btn btn-info"  >
                  Sign out
                </button>
              
                <Nav.Link
                  eventKey={2}
                  as={Link}
                  to="/login"
                  className="text-light"
                >
                  Login
                </Nav.Link>
             
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
     );
};

export default Header;