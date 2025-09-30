import Button from "./buttons";
import './TodoItem.css';

 const TodoItem = ({id, todoText, todoDate}) => {
    
    const deleteHandler = () => {
      console.log(`Trying to delete ${id} ${todoText}`);
    }
    
    return <div className="container">
        <div className="row">
          <div className="col-5 text-truncate">
            {todoText}
          </div>
          <div className="col-3">
            {todoDate}
          </div>
          <div className="col-2">
            <Button btnType="danger" btnText='Delete'handler={deleteHandler}/> 
          </div> 
        </div> 
      </div>
 }

 export default TodoItem;