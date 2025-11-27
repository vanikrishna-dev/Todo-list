import { createContext, useReducer } from "react";
import { TodoReducer } from "./TodoReducer";

export const TodoContext = createContext();

export const TodoContextProvider = ({children}) => {

  const [todoItems, dispatch] = useReducer(TodoReducer, []);

  const addTodoItem = (id, todoText, todoDate) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {id, todoText, todoDate}
    })
  }

  const deleteTodoItem = (todoId) => {
    dispatch({
      type: 'DELETE_ITEM',
      payload: {todoId}
    })
  }

  const addAllTodoItems = (todoItems) => {
    dispatch({
      type: 'ALL_ITEMS' ,
      payload: {
        allItems: todoItems
      }
    })
  }
 
  return <TodoContext.Provider value = {{todoItems, addTodoItem, deleteTodoItem, addAllTodoItems}}>
    {children}
    </TodoContext.Provider>
}