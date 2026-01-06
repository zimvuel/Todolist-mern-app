import { Navigate, useNavigate, useParams } from "react-router"
import EditTodo from "../components/EditTodo"
import { getTodoApi, updateTodoTitleApi } from "../services/todoService";
import useSWR, { useSWRConfig } from "swr";

const EditTodoPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { mutate } = useSWRConfig();

    const fetcher = async () => await getTodoApi(id!).then(res => res.data);
    
    const { data: todo, isLoading, error } = useSWR(id ? `todo-${id}` : null, fetcher);

    if(!id){
        return <Navigate to="/" replace />;
    }

    if (isLoading) return <div className="text-2xl dark:bg-black-mode">Loading...</div>;
    if (error) return <div className="text-2xl text-red-500">Error loading todos</div>;

    const updateTodoTitle = async (title : string) => {
        try{
            await updateTodoTitleApi({id : id, title});

            mutate("todos");
            
            navigate("/");
        } catch (error) {
            console.log("error in update todo", error);
        }
        
    }

    return (
        <div>
            <EditTodo handleUpdate={updateTodoTitle} title={todo.title}/>
        </div>
    )
}

export default EditTodoPage