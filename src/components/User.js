import React from 'react';
import { UserProvider } from '../contexts/UserContext';
import UserName from './UserName';

function User() {
  return (
    <UserProvider value="Elisson Silva">
      <UserName />
    </UserProvider>
  );
}

export default User;