import { FC, useState } from 'react';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { addTodo } from '../../redux/slices/todoSlice';

export const InputField: FC = () => {
  const [text, setText] = useState<string>('');
  const dispatch = useAppDispatch();

  const handleAddNewTodo = () => {
    dispatch(addTodo(text));
    setText('');
  };

  return (
    <div>
      <label htmlFor='text'>
        <input
          type='text'
          name='text'
          id='text'
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
      </label>
      <button onClick={handleAddNewTodo}>Add new todo</button>
    </div>
  );
};
