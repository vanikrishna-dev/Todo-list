import { useState } from "react"
import AddTodo from "./components/AddTodo"
import AppName from "./components/AppName"
import TodoItems from "./components/TodoItems"
import initialTodoItems from "./components/InitialTodoItems"

function App() {

  const [todoItems, setTodoItems]=useState(initialTodoItems);

  const addTodoItem = (todoText, todoDate) => {
    setTodoItems(currentTodoItems => {
      return [...currentTodoItems, {id: todoText, todoText, todoDate}]
    })
  }

  const deleteTodoItem = (todoId) => {
    setTodoItems(currentTodoItems => {
      return currentTodoItems.filter (item => item.id !== todoId);
    })
  }

  return ( 
    <center>
      <AppName  />
      <br />
      <AddTodo addTodoItem={addTodoItem}/>
      <br />
      <TodoItems todoItems={todoItems} deleteTodoItem = {deleteTodoItem}/>
    </center>
  )
}

export default App
