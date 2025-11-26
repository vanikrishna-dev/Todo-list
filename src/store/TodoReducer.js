export const TodoReducer = (currentTodoItems , action) => {
  switch (action.type){
    case 'ADD_ITEM': {
      const todoText = action.payload.todoText;
      const todoDate = action.payload.todoDate;
      return [...currentTodoItems, {id: todoText, todoText, todoDate}];
    }
    case 'DELETE_ITEM':
      return currentTodoItems.filter(item => item.id !== action.payload.todoId);
    case 'ALL_ITEMS':
      return action.payload.allItems;
    default:
      return currentTodoItems;
  }
};