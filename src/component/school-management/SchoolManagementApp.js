import React, { useState } from 'react';
// import { schoolData } from '../../resource/data';
import CustomNavbar from './CustomNavbar';
import UserTable from './UserTable';
import { paginate } from '../../utils/paginationHelper';  // Import the helper
import CustomPagination from './CustomPagination';


const SchoolManagementApp = ({ schoolData }) => {
  const [filteredUsers, setFilteredUsers] = useState(schoolData);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;
  // Pagination calculation using the helper function
  // const { paginatedItems } = paginate(filteredUsers, currentPage, usersPerPage);
  const { paginatedItems, totalPages } = paginate(filteredUsers, currentPage, usersPerPage);




  const filterUsers = (role) => {
    console.log(`Filtering users by role: ${role}`);
    // console.log(schoolData);  // Logs the full user data to check if roles exist

    setCurrentPage(1);  // Reset to page 1 on filter

    if (role === 'all') {
      setFilteredUsers(schoolData);  // Show all users
      console.log("All Users:", filteredUsers);  // Log the filtered users
    } else {
      const filteredUsers = schoolData.filter(user => user.role.toLowerCase() === role.toLowerCase());
      console.log("Filtered Users:", filteredUsers);  // Log the filtered users
      setFilteredUsers(filteredUsers);
    }
  };



  return (
    <div >

      {/* <pre>{JSON.stringify(schoolData, "", 2)}</pre> */}
      <CustomNavbar filterUsers={filterUsers} />
      <UserTable users={paginatedItems} />


      <CustomPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />


    </div>
  );
};


export default SchoolManagementApp;