import {
  FETCH_TASKS_REQUEST,
  FETCH_TASKS_SUCCESS,
  FETCH_TASKS_FAILURE,
  TaskFetchActionTypes,
} from "../actions/taskActions/fetchTaskActions";
import { POST_TASKS_FAILURE, POST_TASKS_REQUEST, POST_TASKS_SUCCESS, TaskPostActionTypes } from "../actions/taskActions/postTastActions";
import { Task } from "../api/fetchTasks";


interface TaskState {
  loading: boolean;
  tasks: Task[];
  error: string;
}

const initialState: TaskState = {
  loading: false,
  tasks: [],
  error: "",
};


const taskReducer = (
  state = initialState,
  action: TaskFetchActionTypes | TaskPostActionTypes
): TaskState => {
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
        error: "",
      };
    case FETCH_TASKS_FAILURE:
      return {
        ...state,
        loading: false,
     //   tasks: [],
        error: action.payload,
      };
      case POST_TASKS_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case POST_TASKS_SUCCESS:
        return {
          loading: false,
          tasks: [...state.tasks,action.payload],
          error: "",
        };
      case POST_TASKS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
    default:
      return state;
  }
};

export default taskReducer;
