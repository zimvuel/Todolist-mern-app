import { Navigate, useNavigate, useParams } from "react-router"
import EditTodo from "../components/EditTodo"
import { getTodoApi, updateTodoTitleApi } from "../services/todoService";
import { useEffect, useState } from "react";

const EditTodoPage = () => {
    const [title, setTitle] = useState("");
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchTodo = async () => {
            if(!id){
                return <Navigate to="/" replace />;
            }
            try{
                const res = await getTodoApi(id);
                setTitle(res.data.title);
            } catch (error) {
                console.log("error fetching data for edit", error);
            }
        }

        fetchTodo();
    }, [id]);

    if(!id){
        return <Navigate to="/" replace />;
    }

    const updateTodoTitle = async (title : string) => {
        try{
            await updateTodoTitleApi({id : id, title});
            navigate("/");
        } catch (error) {
            console.log("error in update todo", error);
        }
        
    }

    return (
        <div>
            <EditTodo handleUpdate={updateTodoTitle} title={title}/>
        </div>
    )
}

export default EditTodoPage