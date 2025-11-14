import { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoContext } from "../store/TodoContext";

const TodoItems = () => {
    const {todoItems} = useContext(TodoContext);
    return (
        <>
        {todoItems.map((items) => (
            <TodoItem key={items.id} id={items.id} todoText={items.todoText} todoDate={items.todoDate} />
        ))}
        </>
    );
};

export default TodoItems;