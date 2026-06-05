import type { Todo } from "../types/CardTypes"
import { MdOutlineEdit, MdOutlineDelete, MdCheck } from "react-icons/md";
import { Link } from "react-router";

const TodoCard = ({ title, _id, status, onToggle, onDelete } : Todo) => {
    
    return (
      <div className="flex min-h-14 w-full items-center gap-3 border-b border-primary-purple/50 py-3 last:border-none sm:gap-4">
        <div className="relative h-6 w-6 shrink-0">
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
        
        <div className={`min-w-0 flex-1 break-words text-lg font-medium leading-6 sm:text-2xl sm:leading-7 ${status ? "line-through text-gray-500" : ""}`}>
            {title}
        </div>
        <Link to={`/edittodo/${_id}`}>
            <button 
                type="button"
                aria-label={`Edit ${title}`}
                className="flex h-9 w-9 items-center justify-center rounded-lg hover:bg-primary-purple/10"
            >
                <MdOutlineEdit className="text-2xl text-gray-400"/>
            </button>
        </Link>
        <button 
            type="button"
            aria-label={`Delete ${title}`}
            className="flex h-9 w-9 items-center justify-center rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20"
            onClick={() => 
                onDelete(_id)
            }
        >
            <MdOutlineDelete className="text-2xl text-gray-400"/>
        </button>
      </div>
    )
}

export default TodoCard
