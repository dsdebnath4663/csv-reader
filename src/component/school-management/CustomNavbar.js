import React from 'react';
import { Nav } from 'react-bootstrap';

const CustomNavbar = ({ filterUsers }) => {
  return (
    <Nav variant="tabs">
      <Nav.Item>
        <Nav.Link onClick={() => filterUsers('all')}>All Users</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={() => filterUsers('admin')}>Admins</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={() => filterUsers('manager')}>Managers</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={() => filterUsers('employee')}>Employees</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default CustomNavbar;
