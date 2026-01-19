import useSWR from "swr";
import { useState } from "react"
import TodoCard from "../components/TodoCard"
import type { Todo, TodoStatusUpdate } from "../types/CardTypes";
import { Link, useNavigate } from "react-router";
import { MdAdd, MdPerson } from "react-icons/md";
import { deleteTodoApi, getTodoListApi, updateTodoStatusApi } from "../services/todoService";
import Toolbar from "../components/Toolbar";
import useTheme from "../hooks/useTheme";
import emptyTodolist from "../assets/emptyTodolist.png";
import { logoutApi } from "../services/authServices";
import axios from "axios";

const HomePage = () => {
  const navigate = useNavigate();
  const fetcher = async () => await getTodoListApi().then(res => res.data);

  const { data: todos, isLoading, error, mutate } = useSWR("todos", fetcher);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("ALL");
  const { isDark, setIsDark } = useTheme();
  
  const handleDelete = async (id : string) => {
      try {
          await deleteTodoApi(id);
          
          mutate();
      } catch (error) {
          console.log("error in delete todo", error);
      }
  }

  const handleUpdate = async ({id, status} : TodoStatusUpdate) => {
      try{
          const newStatus = !status;
          await updateTodoStatusApi({id, status: newStatus});
          
          mutate();
      } catch (error) {
          console.log("error in update todo", error);
      }
  }

  const handleLogout = async () => {
    try {
      navigate("/login");
      await logoutApi();
      await mutate("todos", {
        optimisticData: [],  
        revalidate: false 
      });
    } catch (error) {
      console.log("error in handle logout", error)
    }
  }

  if (isLoading) return <div className="text-2xl dark:bg-black-mode dark:text-white text-primary-purple h-screen w-screen justify-center items-center">Loading...</div>;
  if (error) {
    if(axios.isAxiosError(error)){
      navigate("/login");
      return null;
    } 

    return <div className="text-2xl text-red-500">Error loading todos</div>;
  }

  const safeTodos = todos || [];

  const filteredTodos = safeTodos.filter((todo : Todo) => {
    const matchesSearch = todo.title.toLowerCase().includes(search.toLowerCase());
    
    if (filter === "Complete") {
      return matchesSearch && todo.status === true;
    }
    if (filter === "Incomplete") {
      return matchesSearch && todo.status === false;
    }
    
    return matchesSearch;
  });

  return (
    <div className="flex flex-col items-center gap-8 pt-4 h-screen w-screen px-4 dark:bg-black-mode dark:text-white">
      <div className="flex items-center w-full">
        <div className="flex-1"></div>
        <p className="text-4xl font-medium text-center">
          TODO LIST
        </p>
        <div className="flex-1 flex justify-end">
          <button 
            onClick={handleLogout}
            className="text-gray-600 font-medium hover:underline dark:text-white cursor-pointer"
          >
            logout
          </button>
          <MdPerson className="h-12 w-auto text-primary-purple" />
        </div>
      </div>
      <Toolbar 
        search={search} 
        setSearch={setSearch} 
        filter={filter} 
        setFilter={setFilter} 
        isDarkMode={isDark} 
        setIsDarkMode={setIsDark}
      />
      <div className="gap-2">
        {filteredTodos.map((todo : Todo) => 
          <TodoCard 
            key={todo._id}
            title={todo.title} 
            _id={todo._id} 
            status={todo.status}
            onToggle={handleUpdate}
            onDelete={handleDelete}
          />
        )}
        {filteredTodos.length === 0 && (
          <div className="flex flex-col items-center justify-center gap-4 mt-10">
            <img 
              src={emptyTodolist} 
              alt="No todo found" 
              className="w-64 h-auto" 
            />  
            <p className="text-xl dark:text-white">
              No todos found...
            </p>
          </div>
        )}
      </div>
      <div className="fixed bottom-10 right-90">
        <Link to="/addtodo">
          <button className="bg-primary-purple rounded-full p-2 justify-center items-center flex">
            <MdAdd className="text-white text-4xl"/>
          </button>
        </Link>
      </div>
    </div>
  )
}

export default HomePage
