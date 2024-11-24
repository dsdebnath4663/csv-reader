// src/components/UserDetailsModal.js
import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const UserDetailsModal = ({ user, show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>User Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Address:</strong> {user.details.address}</p>
        <p><strong>Phone:</strong> {user.details.phone}</p>
        <p><strong>Preferences:</strong> Notifications: {user.details.preferences.notifications ? 'Enabled' : 'Disabled'}, Theme: {user.details.preferences.theme}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UserDetailsModal;
