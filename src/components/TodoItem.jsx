import { useContext } from "react";
import Button from "./buttons";
import './TodoItem.css';
import { TodoContext } from "../store/TodoContext";

 const TodoItem = ({id, todoText, todoDate}) => {

  const deleteHandler = () => {
    fetch(`http://localhost:3000/todos/${id}`, {
        method:'DELETE'
        })
      .then(res => res.json())
      .then(data => {
        deleteTodoItem(data.id)
      })
      .catch(err => {
        console.log(err);
      }) 
  }

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
            handler={deleteHandler} /> 
          </div> 
        </div> 
      </div>
 }

 export default TodoItem;