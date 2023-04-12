import { atom, selector } from 'recoil';
import type { TItem } from '../types/TodoType';

export const todoListState = atom<TItem[]>({
  key: 'todoListState',
  default: [],
});

export const todoListFilterState = atom<string>({
  key: 'todoListFilterState',
  default: 'Show all',
});

export const filteredTodoLIstState = selector<TItem[]>({
  key: 'filteredTodoListState',
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case 'Show Completed':
        return list.filter((item: TItem) => item.isComplete);
      case 'Show Uncompleted':
        return list.filter((item: TItem) => !(item.isComplete));
      default:
        return list;
    }
  },
});

export const todoListStatsState = selector<any>({
  key: 'todoListStatsState',
  get: ({ get }) => {
    const todoList = get(todoListState);

    const totalNum = todoList.length;
    const totalCompletedNum = todoList.filter((item: TItem) => item.isComplete).length;
    const totalUncompletedNum = totalNum - totalCompletedNum;
    const percentCompleted = totalNum === 0 ? 0 : (totalCompletedNum / totalNum) * 100;

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
    };
  },
});
