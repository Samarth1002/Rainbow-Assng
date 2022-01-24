import React, { useState } from "react";
import {
  Nav,
  NavItem,
  NavLink,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Dropdown,
  Col,
} from "reactstrap";



import { Link } from "react-router-dom";

const NavbarSection = () => {
  const [toggleAcad, setToggleAcad] = useState(false);
  const [toggleEnrich, setToggleEnrich] = useState(false);
  const [toggleServ, setToggleServ] = useState(false);

  const [navItems, setNavItems] = useState([
    "Link 1",
    "Link 2",
    "Link 3",
    "Link 4",
  ]);

  const togglerAcad = () => setToggleAcad(!toggleAcad);
  const togglerEnric = () => setToggleEnrich(!toggleEnrich);
  const togglerServ = () => setToggleServ(!toggleServ);

  return (
    <>
      <Nav className="navbar-div">
        <NavItem>
          <NavLink to="/" tag={Link}>
            K12 SCHOOL
          </NavLink>
        </NavItem>

        <Dropdown nav toggle={togglerAcad} isOpen={toggleAcad}>
          <DropdownToggle nav caret>
            Academics
          </DropdownToggle>
          <DropdownMenu>
            {navItems.map((item, index) => {
              return <DropdownItem key={index}> {item}</DropdownItem>;
            })}
          </DropdownMenu>
        </Dropdown>

        <Dropdown nav toggle={togglerEnric} isOpen={toggleEnrich}>
          <DropdownToggle caret nav>
            Enrichment
            <DropdownMenu>
              {navItems.map((item, index) => {
                return <DropdownItem key={index}>{item}</DropdownItem>;
              })}
            </DropdownMenu>
          </DropdownToggle>
        </Dropdown>

        <Dropdown nav toggle={togglerServ} isOpen={toggleServ}>
          <DropdownToggle caret nav>
            Services
            <DropdownMenu>
              {navItems.map((item, index) => {
                return <DropdownItem key={index}>{item}</DropdownItem>;
              })}
            </DropdownMenu>
          </DropdownToggle>
        </Dropdown>

        <NavItem>
          <NavLink tag={Link} to="/">
            About
          </NavLink>
        </NavItem>
      </Nav>
    </>
  );
};

export default NavbarSection;
