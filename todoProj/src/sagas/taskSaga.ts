import { call, put, takeEvery } from "redux-saga/effects";
import { fetchTask, Task } from "../api/fetchTasks";
import {
  FETCH_TASKS_REQUEST,
  fetchTasksFailure,
  fetchTasksSuccess,
} from "../actions/taskActions";

function* createNewTaskSaga() {
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

function* watchFetchTasks() {
  yield takeEvery(FETCH_TASKS_REQUEST, createNewTaskSaga);
}

export default watchFetchTasks;
