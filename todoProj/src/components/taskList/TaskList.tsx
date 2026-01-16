import React, { useEffect } from 'react';

import { AppState } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import { UnknownAction } from '@reduxjs/toolkit';
import { fetchTasksRequest } from '../../actions/taskActions/fetchTaskActions';
import { Task } from '../task/task';
import style from "./style.module.css"

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
      <ul className={style.ul_wrapper}>
        {tasks.map((task, inx) => (
          <Task key={task.id} name={task.name} description={task.description} index={inx} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;