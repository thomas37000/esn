import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
`;

const Nav = () => {
  return (
    <NavWrapper>
      <Link to="/">
        <img className="logo" src="" alt="" />
      </Link>
    </NavWrapper>
  );
};

export default Nav;