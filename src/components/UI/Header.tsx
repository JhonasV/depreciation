import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  height: 3.5em;
  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.a`
  text-decoration: none;
  background-color: #54a0ff;
  padding: 0.5rem;
  color: #fff;
  border-radius: 4px;
  font-size: 20px;
  font-weight: bold;
`;

const HeaderControl = styled.ul`
  height: 100%;
  display: flex;
  align-items: center;
  li {
    list-style: none;
    padding: 1em 1.5em;
    /* background-color: black; */
    color: red;
    cursor: pointer;
    font-weight: bold;
    font-size: 20px;
    &::hover {
      background-color: #fff;
      color: red;
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>Calculadora de descuentos</Logo>

      {/* <HeaderControl>
        <li>-</li>
        <li>x</li>
      </HeaderControl> */}
    </HeaderContainer>
  );
};

export default Header;
