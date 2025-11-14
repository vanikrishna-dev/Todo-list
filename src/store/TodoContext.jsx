import { createContext, useState } from "react";
import initialTodoItems from "./initialTodoItems"

export const TodoContext = createContext();

export const TodoContextProvider = ({children}) => {
    const [todoItems, setTodoItems] = useState(initialTodoItems);

  const addTodoItem = (todoText, todoDate) => {
    setTodoItems(currentTodoItems => {
      return [...currentTodoItems, {id: todoText, todoText, todoDate}]
    })
  }

  const deleteTodoItem = (todoId) => {
    setTodoItems(currentTodoItems => {
      return currentTodoItems.filter(item => item.id !== todoId);
    })
  }
 
  return <TodoContext.Provider value = {{todoItems, addTodoItem, deleteTodoItem}}>
    {children}
    </TodoContext.Provider>
}