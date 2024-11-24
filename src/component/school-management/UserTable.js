import React, { useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import UserModal from './UserModal';

const UserTable = ({ users }) => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const openModal = (user) => {
    console.log("User selected for modal:", user);
    setSelectedUser(user);
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Role</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.role}</td>
              <td>
                <Button onClick={() => openModal(user)}>View Details</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {selectedUser && (
        <UserModal
          show={showModal}
          onHide={closeModal}
          user={selectedUser}
        />
      )}
    </>
  );
};

export default UserTable;
