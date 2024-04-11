import { ITodos } from '../../interfaces/todo';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { fetchTodos } from '../asyncCreator/fetchTodos';

const todosState: ITodos = {
  todos: [],
  status: null,
  error: '',
};

export const todoSlice = createSlice({
  name: 'todos',
  initialState: todosState,
  reducers: {
    addTodo(state, action: PayloadAction<string>) {
      state.todos.push({
        id: +new Date(),
        title: action.payload,
        completed: false,
      });
    },
    deleteTodo(state, action: PayloadAction<number>) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleTodoCompleted(state, action: PayloadAction<number>) {
      const toggleTodo = state.todos.find((todo) => todo.id === action.payload);
      if (toggleTodo) {
        toggleTodo.completed = !toggleTodo.completed;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.todos = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message as unknown as string;
      });
  },
});

export default todoSlice.reducer;
export const { addTodo, deleteTodo, toggleTodoCompleted } = todoSlice.actions;
