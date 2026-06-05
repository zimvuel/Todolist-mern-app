import useSWR from "swr";
import { useState } from "react";
import TodoCard from "../components/TodoCard";
import type { Todo, TodoStatusUpdate } from "../types/CardTypes";
import { Link, useNavigate } from "react-router";
import { MdAdd, MdLogout } from "react-icons/md";
import {
  deleteTodoApi,
  getTodoListApi,
  updateTodoStatusApi,
} from "../services/todoService";
import Toolbar from "../components/Toolbar";
import useTheme from "../hooks/useTheme";
import emptyTodolist from "../assets/emptyTodolist.png";
import { logoutApi } from "../services/authServices";
import axios from "axios";
import TodoLogo from "../components/TodoLogo";

const HomePage = () => {
  const navigate = useNavigate();
  const fetcher = async () => await getTodoListApi().then((res) => res.data);

  const { data: todos, isLoading, error, mutate } = useSWR("todos", fetcher);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("ALL");
  const { isDark, setIsDark } = useTheme();

  const handleDelete = async (id: string) => {
    try {
      await deleteTodoApi(id);

      mutate();
    } catch (error) {
      console.log("error in delete todo", error);
    }
  };

  const handleUpdate = async ({ id, status }: TodoStatusUpdate) => {
    try {
      const newStatus = !status;
      await updateTodoStatusApi({ id, status: newStatus });

      mutate();
    } catch (error) {
      console.log("error in update todo", error);
    }
  };

  const handleLogout = async () => {
    try {
      navigate("/login");
      await logoutApi();
      await mutate("todos", {
        optimisticData: [],
        revalidate: false,
      });
    } catch (error) {
      console.log("error in handle logout", error);
    }
  };

  if (isLoading)
    return (
      <div className="flex min-h-dvh w-full items-center justify-center bg-white text-2xl text-primary-purple dark:bg-black-mode dark:text-white">
        Loading...
      </div>
    );
  if (error) {
    if (axios.isAxiosError(error)) {
      navigate("/login");
      return null;
    }

    return (
      <div className="flex min-h-dvh w-full items-center justify-center bg-white px-4 text-center text-2xl text-red-500 dark:bg-black-mode">
        Error loading todos
      </div>
    );
  }

  const safeTodos = todos || [];

  const filteredTodos = safeTodos.filter((todo: Todo) => {
    const matchesSearch = todo.title
      .toLowerCase()
      .includes(search.toLowerCase());

    if (filter === "Complete") {
      return matchesSearch && todo.status === true;
    }
    if (filter === "Incomplete") {
      return matchesSearch && todo.status === false;
    }

    return matchesSearch;
  });

  return (
    <div className="relative flex min-h-dvh w-full flex-col items-center gap-5 bg-white px-4 py-4 pb-28 dark:bg-black-mode dark:text-white sm:gap-8 sm:py-6">
      <header className="flex w-full max-w-3xl items-center justify-between gap-3">
        <TodoLogo
          iconClassName="h-9 w-9 sm:h-11 sm:w-11"
          textClassName="text-2xl font-medium text-primary-purple dark:text-white sm:text-4xl"
        />
        <div className="flex shrink-0 justify-end items-center gap-3">
          <button
            onClick={handleLogout}
            aria-label="Logout"
            className="flex h-10 items-center gap-2 rounded-lg bg-red-50 px-3 text-red-600 transition-colors hover:bg-red-100 dark:bg-red-900/20 dark:text-red-400 dark:hover:bg-red-900/40 sm:h-auto sm:px-4 sm:py-2 font-medium cursor-pointer"
          >
            <MdLogout className="text-xl" />
            <span className="hidden sm:inline">Logout</span>
          </button>
        </div>
      </header>
      <Toolbar
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        isDarkMode={isDark}
        setIsDarkMode={setIsDark}
      />
      <div className="flex w-full max-w-3xl flex-col">
        {filteredTodos.map((todo: Todo) => (
          <TodoCard
            key={todo._id}
            title={todo.title}
            _id={todo._id}
            status={todo.status}
            onToggle={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
        {filteredTodos.length === 0 && (
          <div className="mt-8 flex flex-col items-center justify-center gap-4 text-center sm:mt-10">
            <img
              src={emptyTodolist}
              alt="No todo found"
              className="h-auto w-48 sm:w-64"
            />
            <p className="text-lg dark:text-white sm:text-xl">
              No todos found...
            </p>
          </div>
        )}
      </div>
      <div className="fixed bottom-5 right-5 sm:bottom-8 sm:right-90">
        <Link to="/addtodo">
          <button
            type="button"
            aria-label="Add todo"
            className="flex items-center justify-center rounded-full bg-primary-purple p-3 shadow-lg shadow-primary-purple/20"
          >
            <MdAdd className="text-3xl text-white sm:text-4xl" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
