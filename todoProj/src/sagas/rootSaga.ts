import { all } from "redux-saga/effects";
import { watchFetchTasks, watchMoveTaskSaga, watchPostTasks } from "./taskSaga";

export default function* rootSaga() {
  yield all([ watchFetchTasks(), watchPostTasks(),watchMoveTaskSaga()]);
}
