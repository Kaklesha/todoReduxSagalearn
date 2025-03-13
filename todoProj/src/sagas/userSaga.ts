import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchUsersSuccess, fetchUsersFailure, FETCH_USERS_REQUEST } from '../actions/userActions';
import { fetchUsers } from '../api';
import { User } from '../api';

function* fetchUsersSaga() {
  try {
    const users: User[] = yield call(fetchUsers); // Асинхронный вызов API
    yield put(fetchUsersSuccess(users)); // Диспатч успешного действия
  } catch (error) {
  
    if (error instanceof Error) {
      yield put(fetchUsersFailure(error.message));
  
    } else {
      console.error("An unknown error occurred:", error);
    }
   
  }
}

function* watchFetchUsers() {
  yield takeEvery(FETCH_USERS_REQUEST, fetchUsersSaga); // Слушает действие FETCH_USERS_REQUEST
}

export default watchFetchUsers;