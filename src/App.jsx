import AddTodo from "./components/AddTodo"
import AppName from "./components/AppName"
import TodoItems from "./components/TodoItems"
import { TodoContextProvider } from "./store/TodoContext"

function App() {

  return ( 
    <TodoContextProvider>
    <center>
      <AppName  />
      <br />
      <AddTodo />
      <br />
      <TodoItems />
    </center>
    </TodoContextProvider>
  )
}

export default App
