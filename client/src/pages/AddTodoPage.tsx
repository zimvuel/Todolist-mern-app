import AddTodo from "../components/AddTodo"
import { useNavigate } from "react-router";
import { postTodoApi } from "../services/todoService";

const AddTodoPage = () => {
  const navigate = useNavigate();

  const postTodo = async (title: string) => {
      try{
          await postTodoApi(title);
          navigate("/");
      } catch (error) {
          console.log("error in post todo", error);
      }
  }

  return (
    <div>
      <AddTodo handlePost={postTodo}/>
    </div>
  )
}

export default AddTodoPage
