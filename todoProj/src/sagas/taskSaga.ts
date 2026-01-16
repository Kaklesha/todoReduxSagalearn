import { call, put, select, takeEvery } from "redux-saga/effects";
import { fetchTask, postTask, Task } from "../api/fetchTasks";
import {
  FETCH_TASKS_REQUEST,
  fetchTasksFailure,
  fetchTasksSuccess,
} from "../actions/taskActions/fetchTaskActions";
import {
  POST_TASKS_REQUEST,
  postTasksFailure,
  PostTasksRequestAction,
  postTasksSuccess,
} from "../actions/taskActions/postTastActions";
import {
  MOVE_UDP_TASK_REQUEST,
  MoveUDPTaskRequestAction,
  moveUDPTaskSuccess,
  moveUDPTaskFailure,
} from "../actions/taskActions/movetask";
import { swap } from "../components/task/utils";

function* fetchTaskSaga() {
  try {
    const tasks: Task[] = yield call(fetchTask);
    yield put(fetchTasksSuccess(tasks));
  } catch (error) {
    if (error instanceof Error) {
      yield put(fetchTasksFailure(error.message));
    } else {
      console.error("An unknown error occurred:", error);
    }
  }
}
function* postTaskSaga(action: PostTasksRequestAction) {
  try {
    const response: Pick<Task, "id"> = yield call(postTask, action.payload);
    yield put(postTasksSuccess({ ...action.payload, ...response }));
  } catch (error) {
    if (error instanceof Error) {
      yield put(postTasksFailure(error.message));
    } else {
      console.error("An unknown error occurred:", error);
    }
  }
}

function* MoveTaskSaga(action: MoveUDPTaskRequestAction) {
  try {
    const { index, toward } = action.payload;
    const tasks: Task[] = yield select((state) => state.task.tasks);
    const tasksUDP: Task[] = toward
      ? yield call(swap, tasks, index, index - 1)
      : yield call(swap, tasks, index, index + 1);
    yield put(moveUDPTaskSuccess(tasksUDP));
  } catch (error) {
    if (error instanceof Error) {
      yield put(moveUDPTaskFailure(error.message));
    } else {
      console.error("An unknown error occurred:", error);
    }
  }
}

export function* watchPostTasks() {
  yield takeEvery(POST_TASKS_REQUEST, postTaskSaga);
}
export function* watchFetchTasks() {
  yield takeEvery(FETCH_TASKS_REQUEST, fetchTaskSaga);
}
export function* watchMoveTaskSaga() {
  yield takeEvery(MOVE_UDP_TASK_REQUEST, MoveTaskSaga);
}
