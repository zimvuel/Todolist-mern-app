import { useEffect, useState } from "react";
import { Link } from "react-router";
import type { UpdateTodoParams } from "../types/CardTypes";

const EditTodo = ({ handleUpdate, title } : UpdateTodoParams) => {
    const [newTitle, setNewTitle] = useState("");

    useEffect(() => {
        setNewTitle(title);
    }, [title]);

    return (
        <div className="flex h-screen w-screen bg-gray-200 items-center justify-center dark:bg-black-mode dark:text-white">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    handleUpdate(newTitle)
                }}
                className="flex flex-col items-center justify-start bg-white rounded-2xl w-lg h-72 gap-6 dark:border-2 dark:border-white dark:bg-black-mode">
                <div className="text-2xl font-medium flex pt-4">
                    Change Todo
                </div>
                <div className="outline outline-primary-purple rounded-md">
                    <input 
                        type="text"
                        placeholder="Input your todo..."
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                        className="overflow-y-auto outline-none w-md h-10 placeholder: pl-2 text-lg text-primary-purple/80 caret-primary-purple
                        dark:text-white dark:caret-white"
                    />
                </div>
                <div className="flex justify-around w-full pb-4 gap-8 mt-24">
                    <Link to="/">
                        <button
                            type="button"
                            className="px-8 py-2 outline-primary-purple outline text-primary-purple font-medium rounded-md
                                        hover:bg-primary-purple hover:text-white"
                        >
                            CANCEL
                        </button>   
                    </Link>
                    <button 
                        type="submit"
                        className="px-8 py-2 bg-primary-purple text-white font-medium rounded-md
                                    hover:outline-primary-purple hover:outline hover:text-primary-purple hover:bg-white dark:hover:bg-black-mode"
                    >
                        APPLY
                    </button>
                </div>
            </form>
        </div>
    )
}

export default EditTodo
