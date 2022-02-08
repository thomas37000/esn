import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar} from "react-bootstrap/";
import logo from "../img/logo.png";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <Link to="/">
            <img
              className="logo"
              src={logo}
              alt="back to home"
              style={{
                width: 35,
                height: 35,
                marginLeft: 30,
                borderRadius: 50,
              }}
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/formulaire">Formulaire</Nav.Link>

            <Nav.Link href="http://localhost:8080/">
              <a
                href="http://localhost:8080/"
                target="_blank"
                rel="noopener noreferrer"
              >
                esn api
              </a>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
