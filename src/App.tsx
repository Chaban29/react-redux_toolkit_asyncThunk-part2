import { FC, useEffect } from 'react';
import { useAppSelector } from './hooks/useAppSelector';
import { fetchTodos } from './redux/asyncCreator/fetchTodos';
import { useAppDispatch } from './hooks/useAppDispatch';
import { removeTodo } from './redux/asyncCreator/removeTodos';

export const App: FC = () => {
  const { error, status, todos } = useAppSelector((state) => state.todos);
  const dispatch = useAppDispatch();

  const handleDeleteTodo = (todoId: number) => {
    dispatch(removeTodo(todoId));
  };

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {
        <ol>
          {todos.map((todo) => (
            <li key={todo.id}>
              {todo.title}
              <br />
              <button onClick={() => handleDeleteTodo(todo.id)}>
                Delete todo
              </button>
            </li>
          ))}
        </ol>
      }
    </div>
  );
};
