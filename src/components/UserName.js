import React from 'react';
import { UserConsumer } from '../contexts/UserContext';


function UserName() {
  return (
    <UserConsumer>
      {
        (username) => (
          <h1> {username} </h1>
        )
      }
    </UserConsumer>
  );
}

export default UserName;