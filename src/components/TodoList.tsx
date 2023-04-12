import React from 'react';
import { useRecoilValue } from 'recoil';
import type { TItem } from '../types/TodoType';
import { filteredTodoLIstState } from '../atoms/Todo';
import TodoListStats from './TodoListStats';
import TodoListFilters from './TodoListFilters';
import TodoItemCreator from './TodoItemCreator';
import TodoItem from './TodoItem';

function TodoList() {
  const todoList = useRecoilValue<TItem[]>(filteredTodoLIstState);

  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />
      {todoList.map((todoItem: TItem, index: number) => (
        <TodoItem key={todoItem.id} item={todoItem} index={index} />
      ))}
    </>
  );
}

export default TodoList;
