import TimeCheck from './TimeCheck';
import TodoList from './TodoList';
import WeatherCheck from './WeatherCheck';

const Todo = () => {
  return (
    <div>
        <div className="d-flex justify-content-between bg-info text-white">
           <h1 className='display-4 ml-5'>ToDo&Weather</h1>  
           <h1 className='display-4 mr-5'><TimeCheck /></h1> 
        </div>
       
      <div className='text-center'>
        <div className='alert alert-info'>
            <TodoList />
        </div>
        
        <div className='alert alert-success'>
            <WeatherCheck />
        </div>
        
      </div>
    </div>
  );
};

export default Todo;