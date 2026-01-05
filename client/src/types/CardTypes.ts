export interface Todo {
    status: boolean;
    title: string;
    _id: string;
    onToggle: ({ id, status } : TodoStatusUpdate)  => void;
    onDelete: (id: string) => void;
}

export type TodoStatusUpdate = {
  id: string;
  status: boolean;
};

export type TodoTitleUpdate = {
  id: string;
  title: string;
};

export interface AddTodoParams {
  handlePost: (title: string) => void;
};

export interface UpdateTodoParams {
  handleUpdate: (title : string) => void;
  title: string;
};

export interface ToolbarProps {
  search: string;
  setSearch: (search : string) => void;
  filter: string;
  setFilter: (filter : string) => void;
  isDarkMode: boolean;
  setIsDarkMode: (isDarkMode : boolean) => void;
}