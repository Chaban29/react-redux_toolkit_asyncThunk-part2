export interface ITodo {
  id: number;
  title: string;
  completed: boolean;
}

export interface ITodos {
  todos: ITodo[];
  status: null | string;
  error: string;
}
