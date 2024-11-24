// src/components/User.js
import React from 'react';
import { Button, Popover, OverlayTrigger } from 'react-bootstrap';

const User = ({ user, onShowDetails }) => {
  const popover = (
    <Popover id="popover-basic">
      <Popover.Body>
        Role: {user.role}
      </Popover.Body>
    </Popover>
  );

  return (
    <div className="d-flex justify-content-between align-items-center">
      <span>{user.name} ({user.email})</span>
      <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
        <Button variant="link">Info</Button>
      </OverlayTrigger>
      <Button variant="primary" onClick={() => onShowDetails(user)}>Details</Button>
    </div>
  );
};

export default User;
