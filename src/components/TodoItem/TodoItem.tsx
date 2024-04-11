import { FC } from 'react';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { toggleTodoCompleted } from '../../redux/slices/todoSlice';
import { removeTodo } from '../../redux/asyncCreator/removeTodos';

export const TodoItem: FC = () => {
  const dispatch = useAppDispatch();
  const todos = useAppSelector((state) => state.todos.todos);

  const handleDeleteTodo = (todoId: number) => {
    dispatch(removeTodo(todoId));
  };

  const handleTodoCompleted = (todoId: number) => {
    dispatch(toggleTodoCompleted(todoId));
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li
          key={todo.id}
          style={{ textDecoration: todo.completed ? 'line-through' : '' }}
        >
          {todo.title}
          <input
            type='checkbox'
            name='check'
            id='check'
            checked={todo.completed}
            onChange={() => handleTodoCompleted(todo.id)}
          />
          <br />
          <button onClick={() => handleDeleteTodo(todo.id)}>Delete Todo</button>
        </li>
      ))}
    </ul>
  );
};
