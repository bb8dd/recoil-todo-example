import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from '../atoms/Todo';
import type { TItem } from '../types/TodoType';

let id = 0;

function TodoItemCreator() {
  const [inputValue, setInputValue] = useState<string>('');
  const setTodoList = useSetRecoilState<TItem[]>(todoListState);

  const addItem = () => {
    setTodoList((oldTodoList: TItem[]) => [
      ...oldTodoList,
      {
        id: ++id,
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue('');
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button type="button" onClick={addItem}>Add</button>
    </div>
  );
}

export default TodoItemCreator;
