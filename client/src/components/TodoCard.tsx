import { useState } from "react"
import type { Todo } from "../types/CardTypes"

const TodoCard = ({title} : Todo) => {
    const [isChecked, setIsChecked] = useState(false);

    return (
      <div className="flex items-center justify-center h-40 gap-4">
        <input 
            type="checkbox"
            checked = {isChecked}
            onChange={() => {
                setIsChecked(!isChecked)
            }}
            className="w-8 h-8 accent-primary-purple "
        />
        <div className="text-3xl leading-none">
            {title}
        </div>
      </div>
    )
}

export default TodoCard
