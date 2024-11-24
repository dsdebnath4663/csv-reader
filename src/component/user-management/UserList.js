import React, { useState } from 'react';
import { ListGroup, Collapse, Button } from 'react-bootstrap';

const UserList = ({ users }) => {
  const [openStates, setOpenStates] = useState({});
  console.log(`openStates:`, openStates); // Log the current state after every render


  const toggleOpen = (userId) => {
    console.log(`Toggling user ${userId}`); // Log which user we're toggling

    setOpenStates((prevState) => ({
      ...prevState,
      [userId]: !prevState[userId],
    }));
  };



  return (
    <ListGroup>
      {users.map((user) => (
        <ListGroup.Item key={user.id}>
          <div>
            <strong>{user.name}</strong> ({user.role}) - {user.email}
            <Collapse in={openStates[user.id]}>
              <div>{user.details}</div>
            </Collapse>
            <Button
              variant="link"
              onClick={() => toggleOpen(user.id)}
            >
              {openStates[user.id] ? "Hide Details" : "Show Details"}
            </Button>
          </div>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default UserList;
