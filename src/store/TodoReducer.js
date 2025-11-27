export const TodoReducer = (currentTodoItems , action) => {
  switch (action.type){
    case 'ADD_ITEM': {
      const {id, todoText, todoDate} = action.payload;
      return [...currentTodoItems, {id, todoText, todoDate}];
    }
    case 'DELETE_ITEM':
      return currentTodoItems.filter(item => item.id !== action.payload.todoId);
    case 'ALL_ITEMS':
      return action.payload.allItems;
    default:
      return currentTodoItems;
  }
};