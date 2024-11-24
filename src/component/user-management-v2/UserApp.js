// src/App.js
import React, { useState } from 'react';
import { Container, Stack } from 'react-bootstrap';
import { users } from '../../resource/data';
import UserDetailsModal from './UserDetailsModal';
import NavbarComponent from './NavbarComponent';
import PaginationComponent from './PaginationComponent';
import UserListV2 from './UserListv2';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function UserApp() {
  const [filter, setFilter] = useState('all');
  const [selectedUser, setSelectedUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [
    currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5; // Display 5 users per page

  // Filter users based on the selected role
  const filteredUsers = users.filter(user => {
    if (filter === 'all') return true;
    return user.role === filter;
  });

  // Calculate total pages
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  // Get current users for the page
  const currentUsers = filteredUsers.slice((currentPage - 1) * usersPerPage, currentPage * usersPerPage);

  const handleShowDetails = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedUser(null);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (

    <Container>

      <Stack gap={3}>
        <div className="p-2">
          <NavbarComponent filter={filter} setFilter={setFilter} />

        </div>
        {/* <div className="p-2">
          <h1>User Management</h1>
          <UserListV2 users={currentUsers} onShowDetails={handleShowDetails} />
        </div>
        <div className="p-2">
          {selectedUser && (
            <UserDetailsModal user={selectedUser} show={showModal} handleClose={handleClose} />
          )}
        </div>
        <div className="p-2">
          <PaginationComponent totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
        </div> */}
      </Stack>





    </Container>
  );
}

export default UserApp;
