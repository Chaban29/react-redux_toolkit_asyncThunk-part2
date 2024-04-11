import { createAsyncThunk } from '@reduxjs/toolkit';
import { deleteTodo } from '../slices/todoSlice';

export const removeTodo = createAsyncThunk(
  'todos/asyncDeleteTodo',
  async (id: number, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
        {
          method: 'DELETE',
        }
      );
      console.log('Async todo deleted');
      if (!response.ok) {
        throw new Error("Cat'n delete task. Server error.");
      }
      return dispatch(deleteTodo(id));
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
    }
  }
);
