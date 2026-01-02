import { useState } from "react"
import type { Todo, TodoStatusUpdate } from "../types/CardTypes"
import { MdOutlineEdit, MdOutlineDelete } from "react-icons/md";
import { Link } from "react-router";
import { deleteTodoApi, updateTodoStatusApi } from "../services/todoService";



const TodoCard = ({title, _id, status} : Todo) => {
    const [isChecked,setIsChecked] = useState(status);
    
    const deleteTodo = async () => {
        try {
            await deleteTodoApi(_id);
            console.log("succesfully deleted ", title);
        } catch (error) {
            console.log("error in delete todo", error);
        }
    }
    const updateTodoStatus = async ({id, status} : TodoStatusUpdate) => {
        try{
            await updateTodoStatusApi({id, status});
        } catch (error) {
            console.log("error in update todo", error);
        }
    }

    return (
      <div className="flex items-center justify-center h-14 gap-4">
        <input 
            type="checkbox"
            checked = {isChecked}
            onChange={() => {
                const todoStatus = !isChecked;
                setIsChecked(todoStatus);
                updateTodoStatus({ id: _id, status: todoStatus });
            }}
            className="w-6 h-6 accent-primary-purple "
        />
        <div className={`text-2xl leading-none w-lg ${isChecked ? "line-through text-gray-500" : ""}`}>
            {title}
        </div>
        <Link to={`/edittodo/${_id}`}>
            <button>
                <MdOutlineEdit className="text-2xl text-gray-500"/>
            </button>
        </Link>
        <button onClick={() => {
            deleteTodo()
        }}>
            <MdOutlineDelete className="text-2xl text-gray-500"/>
        </button>
      </div>
    )
}

export default TodoCard
