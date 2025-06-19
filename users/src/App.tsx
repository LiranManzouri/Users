import React from 'react';
import UserList from "./features/UserList";
import User from "./features/User";

function App() {
  return (
    <div>
      <UserList>
          <User name={'Liran'}></User>
          <User name={'Ido'}></User>
      </UserList>
    </div>
  );
}

export default App;
