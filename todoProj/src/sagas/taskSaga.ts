import { call, put, takeEvery } from "redux-saga/effects";
import { fetchTask, postTask, Task } from "../api/fetchTasks";
import {
  FETCH_TASKS_REQUEST,
  fetchTasksFailure,
  fetchTasksSuccess,
} from "../actions/taskActions/fetchTaskActions";
import { POST_TASKS_REQUEST, postTasksFailure, PostTasksRequestAction, postTasksSuccess, TaskPostActionTypes } from "../actions/taskActions/postTastActions";

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

  
  // | PostTasksSuccessAction
  // | PostTasksFailureAction;
function* postTaskSaga(action: PostTasksRequestAction) {
  try {
  // if(action.type !== POST_TASKS_REQUEST) return;
   const response: Pick<Task,'id'> = yield call(postTask,action.payload)
   yield put(postTasksSuccess({...action.payload, ...response}))
  } catch (error) {
    if (error instanceof Error) {
      yield put(postTasksFailure(error.message));
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
