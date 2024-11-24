// src/components/UserList.js
import React from 'react';
import User from './User';

const UserListV2 = ({ users, onShowDetails }) => {
  return (
    <div>
      {users.map(user => (
        <User key={user.id} user={user} onShowDetails={onShowDetails} />
      ))}
    </div>
  );
};

export default UserListV2; 
