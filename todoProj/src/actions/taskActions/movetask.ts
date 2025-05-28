export const MOVE_UP_TASK = "MOVE_UP_TASK";

export const MOVE_DOWN_TASK = "MOVE_DOWN_TASK";

export interface MoveUpTaskAction {
  type: typeof MOVE_UP_TASK;
  payload: { index: number };
}
export interface MoveDownTaskAction {
  type: typeof MOVE_DOWN_TASK;
  payload: { index: number };
}

export type MoveTaskActions = MoveUpTaskAction | MoveDownTaskAction;

export const moveUpTask = (index: number): MoveUpTaskAction => {
  console.log(`moveUpTask:${index} `);
  return {
    type: MOVE_UP_TASK,
    payload: { index },
  };
};

export const moveDownTask = (index: number): MoveDownTaskAction => {
  console.log(`moveDownTask:${index} `);
  return { type: MOVE_DOWN_TASK, payload: { index } };
};
