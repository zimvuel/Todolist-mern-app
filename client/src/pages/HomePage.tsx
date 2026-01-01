import { useEffect, useState } from "react"
import TodoCard from "../components/TodoCard"
import axios from "axios"
import type { Todo } from "../types/CardTypes";
import { Link } from "react-router";
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp, MdOutlineDarkMode, MdOutlineLightMode, MdOutlineSearch } from "react-icons/md";

const HomePage = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [search, setSearch] = useState("");
  const [isDropdown, setIsDropdown] = useState(false);
  const [filter, setFilter] = useState("ALL");
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await axios.get("http://localhost:5001/api/todolist");
        setTodos(res.data);
      } catch (error) {
        console.log("fetch todos error", error);
      }
    }

    fetchTodos();
  }, []);

  const handleSearch = () => {

  };
  
  return (
    <div className="flex flex-col items-center gap-8 pt-4 h-screen w-full px-4">
      <span className="text-4xl">
        TODO LIST
      </span>
      <div className="flex gap-4 w-full max-w-3xl items-center">
        <form 
          onSubmit={handleSearch} 
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
            className={`flex gap-6 text-2xl items-center bg-primary-purple/90 rounded-lg text-white 
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
            <div className="absolute flex flex-col text-primary-purple border border-primary-purple rounded-lg bg-white z-3 mt-13 w-26">
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
        {todos.map(todo => {
          return <TodoCard title={todo.title} _id={todo._id}/> 
        })}
      </div>
      <div className="absolute bottom-4 right-4">
        <Link to="/addtodo">
          <button>
            addtodo
          </button>
        </Link>
      </div>
    </div>
  )
}

export default HomePage
