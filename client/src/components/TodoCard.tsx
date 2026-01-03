import type { Todo } from "../types/CardTypes"
import { MdOutlineEdit, MdOutlineDelete } from "react-icons/md";
import { Link } from "react-router";

const TodoCard = ({ title, _id, status, onToggle, onDelete } : Todo) => {
    
    return (
      <div className="flex items-center justify-center h-14 gap-4">
        <input 
            type="checkbox"
            checked = {status}
            onChange={() => 
                onToggle({id : _id, status})
            }
            className="w-6 h-6 accent-primary-purple "
        />
        <div className={`text-2xl leading-none w-lg ${status ? "line-through text-gray-500" : ""}`}>
            {title}
        </div>
        <Link to={`/edittodo/${_id}`}>
            <button>
                <MdOutlineEdit className="text-2xl text-gray-500"/>
            </button>
        </Link>
        <button onClick={() => 
            onDelete(_id)
        }>
            <MdOutlineDelete className="text-2xl text-gray-500"/>
        </button>
      </div>
    )
}

export default TodoCard
