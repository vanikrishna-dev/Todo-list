import AddTodo from "./components/AddTodo"
import AppName from "./components/AppName"
import TodoItems from "./components/TodoItems"

function App() {

  return ( 
    <center>
      <AppName  />
      <br />
      <AddTodo />
      <br />
      <TodoItems />
    </center>
  )
}

export default App
