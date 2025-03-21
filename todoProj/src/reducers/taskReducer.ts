import {
    FETCH_TASKS_REQUEST,
    FETCH_TASKS_SUCCESS,
    FETCH_TASKS_FAILURE,
    TaskActionTypes,
  } from '../actions/taskActions';
  import { Task } from '../api/fetchTasks';
  
  interface TaskState {
    loading: boolean;
    tasks: Task[];
    error: string;
  }
  
  const initialState: TaskState = {
    loading: false,
    tasks: [],
    error: '',
  };
  
  const taskReducer = (state = initialState, action: TaskActionTypes): TaskState => {
    switch (action.type) {
      case FETCH_TASKS_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_TASKS_SUCCESS:
        return {
            loading: false,
          tasks: action.payload,
          error: '',
        };
      case FETCH_TASKS_FAILURE:
        return {
            loading: false,
          tasks: [],
          error: action.payload ,
        };
      default:
        return state;
    }
  };
  
  export default taskReducer;