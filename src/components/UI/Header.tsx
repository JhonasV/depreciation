import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  height: 3.5em;
  /* box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.2); */
  border-bottom: 1px solid #eee;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.a`
  text-decoration: none;
  background-color: #e67e22;
  padding: 0.5rem;
  color: #fff;
  border-radius: 4px;
  font-size: 20px;
  font-weight: bold;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>Desglose de monedas</Logo>
    </HeaderContainer>
  );
};

export default Header;
