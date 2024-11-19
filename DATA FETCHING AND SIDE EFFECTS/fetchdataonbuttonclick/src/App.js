import {useState} from 'react'
import './App.css';

function App() {

  const[todos,setTodos] = useState([])
  const[loading,setLoading] = useState(false)

  function fetchTodos(){
      setLoading(true);

      fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response)=>{
        return response.json();
      })
      .then((data)=>{
        setTodos(data)
      })
      .catch((error)=>{
        console.log(error); 
      })
      .finally(()=>{
        setLoading(false);
      })
  
  }
     
  return (
    <div className="App">
      <button onClick={fetchTodos}>Show Todo</button>

      <ul>
        {

          loading? 'Loading...':todos.map((todo)=>{
            return(
              <li key={todo.id}>
                <p>Id:- {todo.id}</p>
                <p>Title:- {todo.title}</p>
                <p>Stauts:- {todo.completed}</p>
              </li>
            )
          })}
      </ul>

    </div>
  );
}

export default App;
