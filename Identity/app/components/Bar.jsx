import React, {Component} from 'react';
import { Link } from 'react-router';
import {Navbar, Nav,  NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import LinkContainer from './LinkContainer';

class Bar extends Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Identity</a>
          </Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to="/admin/users">
              <NavItem>Users</NavItem>
            </LinkContainer>
            <LinkContainer to="/admin/clients">
              <NavItem>Clients</NavItem>
            </LinkContainer>
          </Nav>
          <Nav pullRight>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Bar;
