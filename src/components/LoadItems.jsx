import { useContext } from "react"
import { TodoContext } from "../store/TodoContext"
import Button from "./buttons";

const LoadItems = () => {

    const {todoItems, addAllTodoItems } = useContext(TodoContext);

    if (todoItems.length !== 0){
        return <></>;
    }

    const loadItemsHandler = () => {
        fetch('http://localhost:3000/todos')
        .then(res => res.json())
        .then(items => {
            const newItems = items.map(item => 
                ({
                    id:item.id,
                    todoText:item.task,
                    todoDate: item.date
                })
            )
            addAllTodoItems(newItems)
        });
    }

    return (
        <>
            <h2>Enjoy your day</h2>
            <Button btnText = 'Load Todos' handler = {loadItemsHandler}> Load Todos </Button>
        </>
    )
}

export default LoadItems;