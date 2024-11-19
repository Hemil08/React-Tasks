import {useState,useEffect} from 'react'
import './App.css';

function App() {

  const [input,setInput] = useState(()=>{
    return localStorage.getItem('input') || '';
  })

  useEffect(()=>{
    localStorage.setItem('input',input);
  },[input])

  const changeInputHandle = (e) =>{
    setInput(e.target.value);
  } 

  return (
    <div className="App">
      <input value={input} onChange={changeInputHandle} placeholder='Type Something...'/>

      <p>Current Input:{input}</p>
    </div>
  );
}

export default App;
