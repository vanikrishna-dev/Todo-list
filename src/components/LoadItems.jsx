import { useContext, useEffect, useState } from "react"
import { TodoContext } from "../store/TodoContext"
import Button from "./buttons";
import { todoItemToClientModel } from "../utils/ModelUtil";

const LoadItems = () => {

    const {todoItems, addAllTodoItems } = useContext(TodoContext);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        fetch('http://localhost:3000/todos')
        .then(res => res.json())
        .then(items => {
            const newItems = items.map(todoItemToClientModel)
            addAllTodoItems(newItems)
        })
        .finally(() => {
            setIsLoading(false);
        });
    }, []);

    return (
        <>
            {isLoading && (
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            )}
            {!isLoading && todoItems.length === 0 && <p>Enjoy your day</p>}
        </>
    )
}

export default LoadItems;