import { useContext } from "react";
import Button from "./buttons";
import './TodoItem.css';
import { TodoContext } from "../store/TodoContext";

 const TodoItem = ({id, todoText, todoDate}) => {
    const {deleteTodoItem} = useContext(TodoContext);
    return <div className="container">
        <div className="row">
          <div className="col-5 text-truncate">
            {todoText}
          </div>
          <div className="col-3">
            {todoDate}
          </div>
          <div className="col-2">
            <Button 
            btnType="danger" 
            btnText='Delete'
            handler={() => deleteTodoItem(id)} /> 
          </div> 
        </div> 
      </div>
 }

 export default TodoItem;