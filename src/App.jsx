import AddTodo from "./components/AddTodo"
import AppName from "./components/AppName"
import LoadItems from "./components/LoadItems"
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
      <LoadItems />
      <br />
      <TodoItems />
    </center>
    </TodoContextProvider>
  )
}

export default App
