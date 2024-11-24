import React from 'react';




import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';




const RolePopover = ({ role }) => {
  console.log("Role received:", role);


  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Popover right</Popover.Header>
      <Popover.Body>

        {role === 'admin' && <p>The Admin has full access to all features.</p>}
        {role === 'manager' && <p>The Manager can oversee user management and reports.</p>}
        {role === 'employee' && <p>The Employee has limited access to their own dashboard.</p>}


      </Popover.Body>
    </Popover>
  );

  return (
    <OverlayTrigger trigger="click" placement="top" overlay={popover}>
      <Button variant="success">Click me to see</Button>
    </OverlayTrigger>
  )
};
export default RolePopover;