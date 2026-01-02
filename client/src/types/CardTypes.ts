export interface Todo {
    status: boolean;
    title: string;
    _id: string;
}

export interface TodoParams {
    id: string;
}

export type TodoStatusUpdate = {
  id: string;
  status: boolean;
};

export type TodoTitleUpdate = {
  id: string;
  title: string;
};