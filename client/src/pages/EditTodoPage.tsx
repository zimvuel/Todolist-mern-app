import { Navigate, useParams } from "react-router"
import EditTodo from "../components/EditTodo"

const EditTodoPage = () => {
    const { id } = useParams();

    if(!id){
        return <Navigate to="/" replace />;
    }

    return (
        <div>
            <EditTodo id={id}/>
        </div>
    )
}

export default EditTodoPage