import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import type { TodoParams } from "../types/CardTypes";
import { getTodoApi, updateTodoTitleApi } from "../services/todoService";

const EditTodo = ({id} : TodoParams ) => {
    const [title, setTitle] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        const fetchTodo = async () => {
            try{
                const res = await getTodoApi(id);
                setTitle(res.data.title);
            } catch (error) {
                console.log("error fetching data for edit", error);
            }
        }
        fetchTodo();
    }, [id]);

    const updateTodoTitle = async () => {
        try{
            await updateTodoTitleApi({id, title});
            navigate("/");
        } catch (error) {
            console.log("error in update todo", error);
        }
        
    }

    return (
        <div className="flex h-screen w-screen bg-gray-200 items-center justify-center">
            <div className="flex flex-col items-center justify-between bg-white rounded-2xl w-lg h-72 gap-6">
                <div className="text-2xl font-medium flex pt-4">
                    Change Todo
                </div>
                <div className="outline outline-primary-purple rounded-md">
                    <input 
                        type="text"
                        placeholder="Input your todo..."
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="overflow-y-auto outline-none w-md h-10 placeholder: pl-2 text-lg"
                    />
                </div>
                <div className="flex justify-around w-full pb-4 gap-8">
                    <Link to="/">
                        <button 
                            className="px-8 py-2 outline-primary-purple outline text-primary-purple font-medium rounded-md
                                        hover:bg-primary-purple hover:text-white"
                        >
                            CANCEL
                        </button>   
                    </Link>
                    <button 
                        onClick={updateTodoTitle}
                        className="px-8 py-2 bg-primary-purple text-white font-medium rounded-md
                                    hover:outline-primary-purple hover:outline hover:text-primary-purple hover:bg-white"
                    >
                        APPLY
                    </button>
                </div>
            </div>
        </div>
    )
}

export default EditTodo
