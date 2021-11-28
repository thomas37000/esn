import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../img/logo.png";

const NavWrapper = styled.div`
  width: 100%;
  height: 7vh;
  background: #f7f7f7;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: right;
  .logo {
    display: flex;
    width: 35px;
    height: 35px;
    margin-left: 30px;
    border-radius: 50%;
  }
  .name-link {
    color: #000;
    text-decoration: none;
    margin: 0 1rem;
  }
  .nav-links {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 45px;
  }
  .nav-links:hover {
    background: lightgray;
  }
`;

const Nav = () => {
  return (
    <NavWrapper>
      <Link to="/">
        <img className="logo" src={logo} alt="back to home" />
      </Link>
      <div>
        <h2>S2N</h2>
      </div>
      <div className="nav-links">
        <Link to="/formulaire" className="name-link">
          formulaire
        </Link>
      </div>
      <div className="nav-links">
        <Link to="/login" className="name-link">
          connenxion
        </Link>
      </div>
      <div className="nav-links">
        <Link to="/profil" className="name-link">
          Profil
        </Link>
      </div>
      <div className="nav-links">
        <a
          href="http://localhost:8080/"
          target="_blank"
          rel="noopener noreferrer"
        >
          esn api
        </a>
      </div>
    </NavWrapper>
  );
};

export default Nav;
