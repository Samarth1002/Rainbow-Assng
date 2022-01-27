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
  NavbarToggler,
  Collapse,
  Navbar,
  NavbarBrand,
} from "reactstrap";

import HeaderSection from "./HeaderSection";
import { AiOutlineShoppingCart } from "react-icons/ai";

import { Link } from "react-router-dom";

import { FaTimes, FaBars } from "react-icons/fa";

const NavbarSection = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [toggleAcad, setToggleAcad] = useState(false);
  const [toggleEnrich, setToggleEnrich] = useState(false);
  const [toggleServ, setToggleServ] = useState(false);

  const [navItems, setNavItems] = useState([
    "Link 1",
    "Link 2",
    "Link 3",
    "Link 4",
  ]);

  const navToggler = () => setIsOpen(!isOpen);
  const togglerAcad = () => setToggleAcad(!toggleAcad);
  const togglerEnric = () => setToggleEnrich(!toggleEnrich);
  const togglerServ = () => setToggleServ(!toggleServ);

  return (
    <>
      <Navbar className="navbar-div nav-items " expand="md" light className="navbar-toggler">
        <NavbarBrand className="header-nav">
          <Col className="header-col">
            <Col className="header-title-div">
              <div className="main-logo"></div>
              <div className="header-title">
                <div className="main-title"> TRILINGUAL ACADEMY</div>
                <div className="main-sub-title"> Singapore</div>
              </div>
            </Col>
          </Col>
        </NavbarBrand>
        <NavbarToggler onClick={navToggler} className="w-end " />
        <Collapse isOpen={!isOpen} navbar>
          <Nav navbar className="text-center">
            <NavItem>
              <NavLink to="/" tag={Link}>
                K12 SCHOOL
              </NavLink>
            </NavItem>

            <Dropdown
              nav
              toggle={togglerAcad}
              isOpen={toggleAcad}
              className="text-center"
            >
              <DropdownToggle nav caret>
                Academics
              </DropdownToggle>
              <DropdownMenu>
                {navItems.map((item, index) => {
                  return <DropdownItem key={index}> {item}</DropdownItem>;
                })}
              </DropdownMenu>
            </Dropdown>

            <Dropdown
              nav
              toggle={togglerEnric}
              isOpen={toggleEnrich}
              className="text-center"
            >
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
            <NavItem className="header-nav">
              <NavLink to="/" tag={Link}>
                Contact Now
              </NavLink>
            </NavItem>
            <NavItem className="header-nav">
              <NavLink to="/" tag={Link}>
                Sign up
              </NavLink>
            </NavItem>
            <NavItem className="header-nav">
              <NavLink to="/" tag={Link}>
                <AiOutlineShoppingCart className="nav-main-cart-logo" />
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
};

export default NavbarSection;
