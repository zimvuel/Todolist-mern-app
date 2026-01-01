import { useState } from "react"
import type { Todo } from "../types/CardTypes"
import { MdOutlineEdit, MdOutlineDelete } from "react-icons/md";
import { Link } from "react-router";
import axios from "axios";



const TodoCard = ({title, _id} : Todo) => {
    const [isChecked,setIsChecked] = useState(false);
    
    const deleteTodo = async () => {
        try {
            await axios.delete(`http://localhost:5001/api/todolist/${_id}`);
            console.log("succesfully deleted ", title);

        } catch (error) {
            console.log("error in delete todo", error);
        }
    }

    return (
      <div className="flex items-center justify-center h-14 gap-4">
        <input 
            type="checkbox"
            checked = {isChecked}
            onChange={() => {
                setIsChecked(!isChecked)
            }}
            className="w-6 h-6 accent-primary-purple "
        />
        <div className="text-2xl leading-none w-lg">
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
