import './App.css';
import {useState} from 'react';
import TodoInput from './Components/TodoInput'
import TodoList from './Components/TodoList';

function App() {

  const[listTodo,setListTodo] = useState([]);

  let addList = (inputText)=>{
    setListTodo([...listTodo,inputText])
  }

  const deleteListItem = (key) =>{
    let newListTodo = [...listTodo];
    newListTodo.splice(key,1)
    setListTodo([...newListTodo])
  }

  return (
    <div className="App">     
      <div className='centerContainer'>
        <TodoInput addList={addList}/>

        <h1 className='appHeading'>TODO</h1>
        <hr/>

        {listTodo.map((listItem,i) =>{
          return(
            <TodoList key={i} index={i} item={listItem} deleteItem={deleteListItem}/>
          )
        })}
      </div>
    </div>
  );
}

export default App;
