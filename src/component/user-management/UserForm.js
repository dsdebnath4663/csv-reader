
import React, { useState } from 'react';
import { Form, Button, Dropdown, InputGroup } from 'react-bootstrap';


const UserForm = ({ addUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("user");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email) {
      addUser({ name, email, role });
      setName("");
      setEmail("");
      setRole("user");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <InputGroup>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </InputGroup>
      </Form.Group>
      <Form.Label>Email</Form.Label>
      <InputGroup>
        <Form.Control
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </InputGroup>
      
      <Form.Group>
      <Form.Label>Role</Form.Label>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            {role.charAt(0).toUpperCase() + role.slice(1)}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => setRole("admin")}>Admin</Dropdown.Item>
            <Dropdown.Item onClick={() => setRole("user")}>User</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Form.Group>
      <Button variant="primary" type="submit">Add User</Button>
    
    </Form>
  );
};

export default UserForm;