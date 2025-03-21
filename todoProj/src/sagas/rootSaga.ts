
import { all } from "redux-saga/effects";
import watchFetchUsers from "./userSaga";
import watchFetchTasks from "./taskSaga";

export default function* rootSaga (){
    yield all([
        watchFetchUsers(),
        watchFetchTasks()
    ])

}