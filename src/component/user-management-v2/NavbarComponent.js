// src/components/NavbarComponent.js
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const NavbarComponent = ({ filter, setFilter }) => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">User Management</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link onClick={() => setFilter('all')}>All Users</Nav.Link>
        <Nav.Link onClick={() => setFilter('admin')}>Admins</Nav.Link>
        <Nav.Link onClick={() => setFilter('manager')}>Managers</Nav.Link>
        <Nav.Link onClick={() => setFilter('employee')}>Employees</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavbarComponent;
