export type TItem = {
  id: number;
  text: string;
  isComplete: boolean;
};
export type TodoListState = {
  totalNum: number;
  totalCompletedNum: number;
  totalUnCompletedNum: number;
  percentCompleted: number;
};
