import { all } from "redux-saga/effects";
import watchFetchUsers from "./userSaga";
import { watchFetchTasks, watchPostTasks } from "./taskSaga";

export default function* rootSaga() {
  yield all([watchFetchUsers(), watchFetchTasks(), watchPostTasks()]);
}
