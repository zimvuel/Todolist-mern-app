import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import type { TodoParams } from "../types/CardTypes";

const EditTodo = ({id} : TodoParams ) => {
    const [title, setTitle] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        const fetchTodo = async () => {
            try{
                const res = await axios.get(`http://localhost:5001/api/todolist/${id}`);
                setTitle(res.data.title)
            } catch (error) {
                console.log("error fetching data for edit", error);
            }
        }
        fetchTodo();
    }, [id]);

    const updateTodo = async () => {
        try{
            await axios.put(`http://localhost:5001/api/todolist/${id}`, {title: title});
            navigate("/");
        } catch (error) {
            console.log("error in update todo", error);
        }
        
    }

    return (
        <div className="flex flex-col items-center justify-center bg-white rounded-2xl w-64 h-48">
            <div className="text-2xl font-extrabold">
                Change Todo
            </div>
            <div>
                <input 
                    type="text"
                    placeholder="Input your todo..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="overflow-y-auto"
                />
            </div>
            <div className="flex justify-around">
                <Link to="/">
                    <button>
                        CANCEL
                    </button>   
                </Link>
                <button onClick={updateTodo}>
                    APPlY
                </button>
            </div>
        </div>
    )
}

export default EditTodo
