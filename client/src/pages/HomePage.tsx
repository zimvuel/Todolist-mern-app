import { useEffect, useState } from "react"
import TodoCard from "../components/TodoCard"
import type { Todo, TodoStatusUpdate } from "../types/CardTypes";
import { Link } from "react-router";
import { MdAdd, MdOutlineArrowDropDown, MdOutlineArrowDropUp, MdOutlineDarkMode, MdOutlineLightMode, MdOutlineSearch } from "react-icons/md";
import { deleteTodoApi, getTodoListApi, updateTodoStatusApi } from "../services/todoService";

const HomePage = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [search, setSearch] = useState("");
  const [isDropdown, setIsDropdown] = useState(false);
  const [filter, setFilter] = useState("ALL");
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await getTodoListApi();
        setTodos(res.data);
      } catch (error) {
        console.log("fetch todos error", error);
      }
    }

    fetchTodos();
  }, []);

  const filteredTodos = todos.filter((todo) => {
    const matchesSearch = todo.title.toLowerCase().includes(search.toLowerCase());
    
    if (filter === "Complete") {
      return matchesSearch && todo.status === true;
    }
    if (filter === "Incomplete") {
      return matchesSearch && todo.status === false;
    }
    
    return matchesSearch;
  });
  
  const handleDelete = async (id : string) => {
      try {
          await deleteTodoApi(id);
          setTodos((prev) => 
            prev.filter(todo => 
              todo._id !== id
            )
          );
      } catch (error) {
          console.log("error in delete todo", error);
      }
  }

  const handleUpdate = async ({id, status} : TodoStatusUpdate) => {
      try{
          const newStatus = !status;
          await updateTodoStatusApi({id, status: newStatus});
          setTodos((prev) => 
            prev.map((todo) => 
              todo._id === id ? {...todo, status: newStatus} : todo
            )
          )
      } catch (error) {
          console.log("error in update todo", error);
      }
  }

  return (
    <div className="flex flex-col items-center gap-8 pt-4 h-screen w-full px-4">
      <span className="text-4xl">
        TODO LIST
      </span>
      <div className="flex gap-4 w-full max-w-3xl items-center">
        <form 
          onSubmit={(e) => {
            e.preventDefault()
          }} 
          className="flex flex-1 items-center border-primary-purple/90 border-2 rounded-lg"
        >
          <input 
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            className="flex-1 w-xl h-12 placeholder: pl-2 outline-none text-lg"
            placeholder="Search todo..."
          />
          <button type="submit">
            <MdOutlineSearch className="text-4xl text-primary-purple/90"/>
          </button>
        </form>
        <div className="flex flex-col relative">
            <button 
            className={`flex justify-between min-w-30 text-2xl items-center bg-primary-purple/90 rounded-lg text-white 
                        ${isDropdown 
                          ? "p-[6.5px] border-2 border-primary-purple rounded-lg" 
                          : "p-2"
                        }`
                      } 
            onClick={() => {
              setIsDropdown(!isDropdown)
            }}
            >
            {filter}
            {isDropdown 
              ? <MdOutlineArrowDropUp /> 
              : <MdOutlineArrowDropDown />
            }
          </button>
          {isDropdown && 
            <div className="absolute flex flex-col text-primary-purple border border-primary-purple rounded-lg bg-white z-3 mt-13 w-full">
              <button 
                className="hover:bg-gray-200 pl-2 text-left"
                onClick={() => {
                  setFilter("ALL");
                  setIsDropdown(false);
                }}
              >
                All
              </button>
              <button 
                className="hover:bg-gray-200 pl-2 text-left"
                onClick={() => {
                  setFilter("Complete");
                  setIsDropdown(false);
                }}
              >
                Complete
              </button>
              <button 
                className="hover:bg-gray-200 pl-2 text-left"
                onClick={() => {
                  setFilter("Incomplete");
                  setIsDropdown(false);
                }}
              >
                Incomplete
              </button>
            </div>
          } 
        </div>
        <button
            className="bg-primary-purple p-1.5 rounded-lg"
            onClick={() => {
              setIsDarkMode(!isDarkMode)
            }}
          >
            {isDarkMode 
              ? <MdOutlineLightMode className="text-4xl text-white"/> 
              : <MdOutlineDarkMode className="text-4xl text-white"/> 
            }
          </button>
      </div>
      <div className="gap-2">
        {filteredTodos.map(todo => 
          <TodoCard 
            key={todo._id}
            title={todo.title} 
            _id={todo._id} 
            status={todo.status}
            onToggle={handleUpdate}
            onDelete={handleDelete}
          />
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
