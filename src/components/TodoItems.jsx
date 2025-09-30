import TodoItem from "./TodoItem";

const TodoItems = () => {

    const todoItems = [
        {id: 1, todoText: "Buy Milk", todoDate: "30/09/2025"},
        {id: 2, todoText: "Go to College", todoDate: "Weekday"},
        {id: 3, todoText: "Exercise", todoDate: "Everyday"},
    ];

    return (
        <>
        {todoItems.map((items) => (

            <TodoItem key={items.id} id={items.id} todoText={items.todoText} todoDate={items.todoDate} />
        ))}
        </>
    );
};

export default TodoItems;