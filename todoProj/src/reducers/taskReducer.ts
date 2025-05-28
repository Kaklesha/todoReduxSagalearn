import {
  FETCH_TASKS_REQUEST,
  FETCH_TASKS_SUCCESS,
  FETCH_TASKS_FAILURE,
  TaskFetchActionTypes,
} from "../actions/taskActions/fetchTaskActions";
import {
  MOVE_DOWN_TASK,
  MOVE_UP_TASK,
  MoveTaskActions,
} from "../actions/taskActions/movetask";
import {
  POST_TASKS_FAILURE,
  POST_TASKS_REQUEST,
  POST_TASKS_SUCCESS,
  TaskPostActionTypes,
} from "../actions/taskActions/postTastActions";
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
// function within(from: number, value: number, to: number) {
//   return Math.
// }
function swap<T>(array: T[], inxFirst: number, inxSecond: number): T[] {
  console.log("___before____");
  console.log(`inxFirst:${inxFirst} inxSecond:${inxSecond}`);
  console.dir(array);
  const dump = array[inxFirst];
  array[inxFirst] = array[inxSecond];
  array[inxSecond] = dump;
  console.log("___after____");
  console.dir(array);
  return array;
}

const taskReducer = (
  state = initialState,
  action: TaskFetchActionTypes | TaskPostActionTypes | MoveTaskActions
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
        tasks: [...state.tasks, action.payload],
        error: "",
      };
    case POST_TASKS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case MOVE_UP_TASK: {
      const { index } = action.payload;
      return {
        loading: false,
        tasks: [...swap(state.tasks, index, index - 1)],
        error: "",
      };
    }
    case MOVE_DOWN_TASK: {
      const { index } = action.payload;
      return {
        loading: false,
        tasks: [...swap(state.tasks, index, index + 1)],
        error: "",
      };
    }
    default:
      return state;
  }
};

export default taskReducer;
