import { useEffect, useState } from "react"
import TodoCard from "../components/TodoCard"
import axios from "axios"
import type { Todo } from "../types/CardTypes";
import { Link } from "react-router";

const HomePage = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

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

  return (
    <div>
      {todos.map(todo => {
        return <TodoCard title={todo.title} _id={todo._id}/> 
      })}
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
