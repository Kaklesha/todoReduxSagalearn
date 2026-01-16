import { Task } from "../../api/fetchTasks";

export const MOVE_UDP_TASK_SUCCESS = "MOVE_UDP_TASK_SUCCESS";

export const MOVE_UDP_TASK_REQUEST = "MOVE_UDP_TASK_REQUEST";

export const MOVE_UDP_TASK_FAILURE = "MOVE_UDP_TASK_FAILURE";

export interface MoveUDPTaskRequestAction {
  type: typeof MOVE_UDP_TASK_REQUEST;
  payload: { index: number; toward: boolean };
}
export interface MoveUDPTaskSuccessAction {
  type: typeof MOVE_UDP_TASK_SUCCESS;
  payload: Task[];
}
export interface MoveUDPTaskFailureAction {
  type: typeof MOVE_UDP_TASK_FAILURE;
  payload: string;
}

export type MoveTaskActions =
  | MoveUDPTaskSuccessAction
  | MoveUDPTaskRequestAction
  | MoveUDPTaskFailureAction;

export const moveUDPTask = (
  index: number,
  toward: boolean
): MoveUDPTaskRequestAction => {
  console.log(`moveUpTask:${index} `);
  return {
    type: MOVE_UDP_TASK_REQUEST,
    payload: { index, toward },
  };
};

export const moveUDPTaskSuccess = (tasks: Task[]): MoveTaskActions => {

  return { type: MOVE_UDP_TASK_SUCCESS, payload: tasks };
};

export const moveUDPTaskFailure = (error: string): MoveTaskActions => {
  console.log(`moveError:${error} `);
  return { type: MOVE_UDP_TASK_FAILURE, payload: error };
};

