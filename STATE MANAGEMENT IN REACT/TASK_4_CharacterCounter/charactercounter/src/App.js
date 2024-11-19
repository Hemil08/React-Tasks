
import {useState} from 'react'
import './App.css';

function App() {

  const [text,setText]  = useState('')

  function handleChange(e) {
    setText(e.target.value.trim());
  }
  
  return (
    <div>
      
      <textarea id="inputField" onChange={handleChange} placeholder='type something..' rows='10' cols='30'></textarea>

     <div>Counter: {text.length}</div> 

    </div>
  );
}

export default App;
