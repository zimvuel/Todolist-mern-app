import { useState } from "react";
import { Link } from "react-router"
import type { AddTodoParams } from "../types/CardTypes";

const AddTodo = ({handlePost} : AddTodoParams) => {
    const [title, setTitle] = useState("");

    return (
       <div className="flex min-h-dvh w-full items-center justify-center bg-gray-200 px-4 py-8 dark:bg-black-mode dark:text-white">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    handlePost(title)
                }}
                className="flex w-full max-w-lg flex-col items-center justify-start gap-6 rounded-2xl bg-white p-4 dark:border-2 dark:border-white dark:bg-black-mode sm:p-6">
                <div className="flex pt-2 text-2xl font-medium sm:pt-4">
                    New Todo
                </div>
                <div className="w-full rounded-md outline outline-primary-purple">
                    <input 
                        type="text"
                        placeholder="Input your todo..."
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="h-10 w-full min-w-0 px-3 text-base text-primary-purple/80 outline-none caret-primary-purple sm:text-lg
                        dark:text-white dark:caret-white"
                    />
                </div>
                <div className="mt-4 flex w-full flex-col gap-3 sm:mt-12 sm:flex-row sm:justify-around sm:gap-8">
                    <Link to="/todos" className="w-full sm:w-auto">
                        <button
                            type="button"
                            className="w-full rounded-md px-8 py-2 font-medium text-primary-purple outline outline-primary-purple
                                        hover:bg-primary-purple hover:text-white"
                        >
                            CANCEL
                        </button>   
                    </Link>
                    <button 
                        type="submit"
                        className="w-full rounded-md bg-primary-purple px-8 py-2 font-medium text-white sm:w-auto
                                    hover:outline-primary-purple hover:outline hover:text-primary-purple hover:bg-white dark:hover:bg-black-mode"
                    >
                        ADD TODO
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AddTodo
