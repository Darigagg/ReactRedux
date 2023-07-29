import React from "react";
import Main from "./Main";
import axios from "axios";
import Todo from "./Todo";
function App(){
    
  const[todos,setTodos] = React.useState([])
   
React.useEffect(() => {
  async  function getTodos(){
    const response   = await axios.get("http://localhost:9999/todos")
  setTodos(response.data)
  }
  getTodos()
},[])
console.log(todos)
    return (
      < div className="div">
      <Main/>
      <h3 className='text-1'>TodoList</h3>
        <div className='div-3'>
          <div>
            <button className='button'>All</button>
          </div>
          <div>
            <button className='button'>Done</button>
          </div>
          <div>
            <button className='button'>Todo</button>
          </div>
        </div>

    {todos.map(obj => <Todo title={obj.title} isDone={obj.isDone} id={obj.id}/>
  
        )}

        <div className='div-100'>

          <div >
            <button className='last-b'>Delete done tasks</button>
          </div>

          <div>
            <button className='last-b'>Delete all tasks</button>
          </div>

        </div>
      </div>
  
    )
  }
  export default App;
