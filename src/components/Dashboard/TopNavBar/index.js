import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, NavDropdown, MenuItem } from 'react-bootstrap';

class TopNavBar extends Component {
  render() {
    return (
      <Navbar fixedTop fluid>
        <Navbar.Header>
          <Navbar.Brand>
            <LinkContainer to="/">
              <a>HR Systems</a>
            </LinkContainer>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight>
          <NavDropdown title="Options" id="options">
            <MenuItem>Option 1</MenuItem>
            <MenuItem>Option 2</MenuItem>
            <MenuItem>Option 3</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>
    );
  }
}

export default TopNavBar;
