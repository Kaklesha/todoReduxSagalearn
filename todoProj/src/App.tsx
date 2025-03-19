import React from 'react';
import UserList from './components/UserList';
import CreateTask from './components/createTask';

const App: React.FC = () => {
  return (
    <div>
      <CreateTask/>
      <UserList />
      
    </div>
  );
};

export default App;