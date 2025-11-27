import Button from "./buttons";
import './AddTodo.css';
import { useContext, useRef } from "react";
import { TodoContext } from "../store/TodoContext";
import { todoItemToClientModel } from "../utils/ModelUtil";

const AddTodo = () => {

    const todoTextInput = useRef();
    const todoDateInput = useRef();
    const {addTodoItem} = useContext(TodoContext);

    const addHandler = () => {
      const todoText = todoTextInput.current.value;
      const todoDate = todoDateInput.current.value;
      todoTextInput.current.value = '';
      todoDateInput.current.value = '';

      fetch("http://localhost:3000/todos", {
        method:'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          task: todoText,
          date: todoDate
        })
      })
      .then(res=>res.json())
      .then(serverItem => {
        const {todoText, todoDate} = todoItemToClientModel(serverItem);
        addTodoItem(todoText, todoDate); 
      })
    }

    return <div className="container">
        <div className="row">
          <div className="col-5">
            <input 
            type="text" 
            className="form-control" 
            placeholder="Enter Todo Here" 
            ref = {todoTextInput}/>
          </div>
          <div className="col-3">
            <input 
            type="date" 
            className="form-control" 
            ref = {todoDateInput}/>
          </div>
          <div className="col-2">
            <Button 
            btnType='success' 
            btnText='Add' 
            handler={addHandler}/>  
          </div>
        </div>
      </div>
}

export default AddTodo;