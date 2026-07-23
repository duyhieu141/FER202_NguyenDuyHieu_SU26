import React from 'react';

const User = ({ user }) => {
  return (
    <div className="user-item">
      <div className="user-name">{user.name}</div>
      <div className="user-email">{user.email}</div>
    </div>
  );
};

export default User;
