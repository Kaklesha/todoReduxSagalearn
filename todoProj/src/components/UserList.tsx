import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersRequest } from '../actions/userActions';
import { AppState } from '../store';
import { useDispatch, useSelector } from 'react-redux';

const UserList: React.FC = () => {
  const dispatch = useDispatch();
  const { loading, users, error } = useSelector((state: AppState) => state.user);

  useEffect(() => {
    dispatch(fetchUsersRequest()); // Диспатч действия для загрузки данных
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;