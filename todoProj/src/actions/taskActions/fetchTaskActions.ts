import { Task } from "../../api/fetchTasks";

export const FETCH_TASKS_REQUEST = 'FETCH_TASKS_REQUEST';
export const FETCH_TASKS_SUCCESS = 'FETCH_TASKS_SUCCESS';
export const FETCH_TASKS_FAILURE = 'FETCH_TASKS_FAILURE';

interface FetchTasksRequestAction {
  type: typeof FETCH_TASKS_REQUEST;
}

interface FetchTasksSuccessAction {
  type: typeof FETCH_TASKS_SUCCESS;
  payload: Task[];
}

interface FetchTasksFailureAction {
  type: typeof FETCH_TASKS_FAILURE;
  payload: string;
}

export type TaskFetchActionTypes =
  | FetchTasksRequestAction
  | FetchTasksSuccessAction
  | FetchTasksFailureAction;

export const fetchTasksRequest = (): FetchTasksRequestAction => ({
  type: FETCH_TASKS_REQUEST,
});

export const fetchTasksSuccess = (tasks: Task[]): FetchTasksSuccessAction => ({
  type: FETCH_TASKS_SUCCESS,
  payload: tasks,
});

export const fetchTasksFailure = (error: string  ): FetchTasksFailureAction => ({
  type: FETCH_TASKS_FAILURE,
  payload: error ,
});