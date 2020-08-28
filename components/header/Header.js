import React from "react";
import "./Header.scss";
import { ImageBaseUrl } from "../../services/config";
import { Nav, NavItem, NavLink, Button } from "reactstrap";
function Header() {
  return (
    <div className="header d-flex align-items-center">
      <div className="col-md-1">
        <img src={`${ImageBaseUrl}recko-logo.svg`} className="w-100" />
      </div>
      <Nav className="col-md-11 justify-content-end">
        <NavItem>
          <NavLink className="NavLink" href="#">
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="NavLink" href="#">
            About
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="NavLink text-red" href="#">
            We are Hiring!
          </NavLink>
        </NavItem>
        <Button color="danger">request Demo</Button>
      </Nav>
    </div>
  );
}

export default Header;
