import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import LinkContainer from './LinkContainer';

class Bar extends Component {
  render() {
    const { isAuthenticated, userName } = this.props;
    return (
      <Navbar inverse fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Identity</a>
          </Navbar.Brand>
          <Navbar.Toggle />
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
            {
              isAuthenticated ? (<NavDropdown eventKey={3} title={userName} id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <NavItem eventKey={1} href="/account/login">Logout</NavItem>
              </NavDropdown>) :
              (
                <NavItem href="/account/login">Login</NavItem>
              )
            }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Bar;
