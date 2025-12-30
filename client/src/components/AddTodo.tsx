import axios from "axios";
import { useState } from "react"
import { Link, useNavigate } from "react-router";

const AddTodo = () => {
    const [title, setTitle] = useState("");

    const navigate = useNavigate();

    const PostTodo = async () => {
        try{
            await axios.post("http://localhost:5001/api/todolist", {title: title});
            navigate("/");
        } catch (error) {
            console.log("error in post todo", error);
        }
        
    }

    return (
        <div className="flex flex-col items-center justify-center bg-white rounded-2xl w-64 h-48">
            <div className="text-2xl font-extrabold">
                New Todo
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
                <button onClick={PostTodo}>
                    APPlY
                </button>
            </div>
        </div>
    )
}

export default AddTodo