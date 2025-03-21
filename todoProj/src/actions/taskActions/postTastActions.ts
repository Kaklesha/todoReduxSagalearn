import { Task } from "../../api/fetchTasks";

export const POST_TASKS_REQUEST = 'POST_TASKS_REQUEST';
export const POST_TASKS_SUCCESS = 'POST_TASKS_SUCCESS';
export const POST_TASKS_FAILURE = 'POST_TASKS_FAILURE';



interface PostTasksRequestAction {
  type: typeof POST_TASKS_REQUEST;
  payload: Omit<Task,"id">
}

interface PostTasksSuccessAction {
  type: typeof POST_TASKS_SUCCESS;
  payload: Task;
}

interface PostTasksFailureAction {
  type: typeof POST_TASKS_FAILURE;
  payload: string;
}

export type TaskPostActionTypes =
  | PostTasksRequestAction
  | PostTasksSuccessAction
  | PostTasksFailureAction;

export const postTasksRequest = (task:Omit<Task,"id">): PostTasksRequestAction => ({
  type: POST_TASKS_REQUEST,
  payload: task
});

export const postTasksSuccess = (task: Task): PostTasksSuccessAction => ({
  type: POST_TASKS_SUCCESS,
  payload: task,
});

export const postTasksFailure = (error: string  ): PostTasksFailureAction => ({
  type: POST_TASKS_FAILURE,
  payload: error ,
});