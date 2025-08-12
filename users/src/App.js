import { useState } from 'react';
import UserForm from './UserForm';
import UserList from './UserList';

function App() {
  const [users, setUsers] = useState([]);

  function onAddUser(user) {
    setUsers([...users, user]);
  }

  return (
    <div>
      <UserForm onAddUser={onAddUser} />
      <UserList users={users} />
    </div>
  );
}

export default App;
