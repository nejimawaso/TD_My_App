import { useHandleTodoTask } from "../hooks/useHandleTodoTask";

const TodoList = () => {

    const {todos, task, handleNewTask, handleSubmit, handleRemoveTask, handleUpdateTask,handleRemoveAllTask} = useHandleTodoTask();    
    return (
        <div className="mb-16">
        <form onSubmit={handleSubmit} className="text-xl">
            <div className="form-group m-10">
                <div className="h3">
                    <label>タスクの追加 : &nbsp; </label>
                    <input value={task} placeholder="Add with enter" onChange={handleNewTask} />
                </div>
            </div>
          
        </form>
        <ul className="mb-16 list-group">
        {todos.map((todo, index) => (
          <li className="text-xl list-group-item list-group-item-primary w-50 m-auto"
            key={index}
            style={{
              textDecoration: todo.isCompleted ? 'line-through' : 'none',
            }}
          >
            <div>
                
            </div>
            <input className="form-check-input"
              type="checkbox"
              checked={todo.isCompleted}
              onChange={() => handleUpdateTask(index)}
            />
                {todo.task} &nbsp;
            
            <button className="btn btn-danger" onClick={() => handleRemoveTask(index)}
            style={{ cursor: 'pointer' }}>
              Delete
            </button>
          </li>
        ))}
        </ul>
        <div><button className="btn btn-danger" onClick={handleRemoveAllTask}>Clear</button></div>
      </div>
    );
  };
  
  export default TodoList;