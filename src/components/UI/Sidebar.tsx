import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
const Navbar = styled.ul`
  width: 100%;
  height: auto;
  background-color: #54a0ff;
  height: 90vh;

  a {
    text-decoration: none;
  }
`;

const NavbarItem = styled.li`
  color: #fff;
  padding: 1rem;
  padding: 1rem 1rem 1rem 2em;
  list-style: none;
  width: 100%;
  font-weight: bold;
  font-size: 17px;
  &:hover {
    background-color: #eee;
    cursor: pointer;
    color: black;
  }
`;

const Sidebar = () => (
  <div>
    <nav>
      <Navbar>
        <NavLink to="/" activeClassName="active">
          <NavbarItem>
            <i className="fas fa-home"></i> Home
          </NavbarItem>
        </NavLink>
        <NavLink to="/calculation" activeClassName="active">
          <NavbarItem>
            <i className="fas fa-calculator"></i> Calcular
          </NavbarItem>
        </NavLink>
        <NavLink to="/history" activeClassName="active">
          <NavbarItem>
            <i className="fas fa-history"></i> Historial
          </NavbarItem>
        </NavLink>
      </Navbar>
    </nav>
  </div>
);

export default Sidebar;
