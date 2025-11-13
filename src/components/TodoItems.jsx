import TodoItem from "./TodoItem";

const TodoItems = ({todoItems, deleteTodoItem}) => {

    return (
        <>
        {todoItems.map((items) => (
            <TodoItem key={items.id} id={items.id} todoText={items.todoText} todoDate={items.todoDate} 
            deleteTodoItem= {deleteTodoItem}/>
        ))}
        </>
    );
};

export default TodoItems;