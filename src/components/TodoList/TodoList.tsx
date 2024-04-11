import { FC } from 'react';
import { TodoItem } from '../TodoItem/TodoItem';
import { InputField } from '../InputFiled/InputFiled';

export const TodoList: FC = () => {
  return (
    <div>
      <InputField />
      <TodoItem />
    </div>
  );
};
