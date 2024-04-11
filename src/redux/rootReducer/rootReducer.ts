import { combineReducers } from 'redux';
import todoReducer from '../slices/todoSlice';
import { store } from '../store/store';

export const rootReducer = combineReducers({
  todos: todoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
