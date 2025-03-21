import React, { useEffect } from 'react';

import { AppState } from '../store';
import { useDispatch, useSelector } from 'react-redux';
import { UnknownAction } from '@reduxjs/toolkit';
import { fetchTasksRequest } from '../actions/taskActions/fetchTaskActions';

const TaskList: React.FC = () => {
  const dispatch = useDispatch();
  const { loading, tasks, error } = useSelector((state: AppState) => state.task);

  useEffect(() => {
    dispatch(fetchTasksRequest() as UnknownAction);
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Task List</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{`${task.name} || ${task.description}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;