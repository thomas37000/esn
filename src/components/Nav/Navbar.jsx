import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap/";
import styled from "styled-components";
import logo from "../img/logo.png";

const NavWrapper = styled.div`
  .logo {
    display: flex;
    width: 35px;
    height: 35px;
    margin-left: 30px;
    border-radius: 50%;
  }
`;

const NavBar = () => {
  return (

      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <Link to="/">
              <img className="logo" src={logo} alt="back to home" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/formulaire">Formulaire</Nav.Link>
              <Nav.Link href="/users/login">Connexion</Nav.Link>
              <Nav.Link href="/users/sign-up">Inscription</Nav.Link>
              <Nav.Link href="/users/profil">Profil</Nav.Link>

              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="/test/technos">
                  Technos
                </NavDropdown.Item>
                <NavDropdown.Item href="/s2n/technos/:id">
                  Techno By id
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  users by id
                </NavDropdown.Item>
              </NavDropdown>

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
