export const todoItemToClientModel = (serverItem) => {
    return {todoText: serverItem.task,
    todoDate: serverItem.date}
};