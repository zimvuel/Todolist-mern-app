import type { Todo } from "../types/CardTypes"
import { MdOutlineEdit, MdOutlineDelete, MdCheck } from "react-icons/md";
import { Link } from "react-router";

const TodoCard = ({ title, _id, status, onToggle, onDelete } : Todo) => {
    
    return (
      <div className="flex items-center justify-center h-14 gap-4 border-b border-primary-purple/50 last:border-none">
        <div className="relative w-6 h-6">
            <input 
            type="checkbox"
            checked = {status}
            onChange={() => 
                onToggle({id : _id, status})
            }
            className="peer w-6 h-6 appearance-none accent-primary-purple border-primary-purple border-2 checked:bg-primary-purple"
            />
            <MdCheck className="absolute top-0 left-0 w-6 h-6 text-white pointer-events-none hidden peer-checked:block"/>
        </div>
        
        <div className={`text-2xl leading-none w-lg font-medium ${status ? "line-through text-gray-500" : ""}`}>
            {title}
        </div>
        <Link to={`/edittodo/${_id}`}>
            <button>
                <MdOutlineEdit className="text-2xl text-gray-400"/>
            </button>
        </Link>
        <button onClick={() => 
            onDelete(_id)
        }>
            <MdOutlineDelete className="text-2xl text-gray-400"/>
        </button>
      </div>
    )
}

export default TodoCard
