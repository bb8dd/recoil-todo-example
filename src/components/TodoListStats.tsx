import React from 'react';
import { useRecoilValue } from 'recoil';
import type { TodoListState } from '../types/TodoType';
import { todoListStatsState } from '../atoms/Todo';

function TodoListStats() {
  const {
    totalNum, totalCompletedNum, totalUnCompletedNum, percentCompleted,
  } = useRecoilValue<TodoListState>(todoListStatsState);
  const formattedPercentCompleted = Math.round(percentCompleted);

  return (
    <ul>
      <li>
        Total items:
        {' '}
        {totalNum}
      </li>
      <li>
        Items completed:
        {' '}
        {totalCompletedNum}
      </li>
      <li>
        Items not completed:
        {' '}
        {totalUnCompletedNum}
      </li>
      <li>
        Percent completed:
        {' '}
        {formattedPercentCompleted}
      </li>
    </ul>
  );
}

export default TodoListStats;
