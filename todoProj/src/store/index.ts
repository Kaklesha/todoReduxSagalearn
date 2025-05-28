import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas/rootSaga";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import taskReducer from "../reducers/taskReducer";

// Создание middleware
const sagaMiddleware = createSagaMiddleware();

// Комбинирование редюсеров
const rootReducer = combineReducers({
  task: taskReducer,
});

// Тип для состояния всего приложения
export type AppState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer, // Передаем rootReducer как поле reducer
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware), // Добавляем sagaMiddleware
});

// Запуск саги
sagaMiddleware.run(rootSaga);

export default store;
