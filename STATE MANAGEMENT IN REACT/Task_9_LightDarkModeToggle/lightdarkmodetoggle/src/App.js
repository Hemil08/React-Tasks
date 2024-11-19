import {useState} from 'react'
import './App.css';

function App() {

  const [mode,setMode] = useState(true)

  function handleToggleButton(){

    const modeButton = document.getElementById('toggleButton')

    setMode(!mode)

    if(mode === true){ 
      document.body.style.backgroundColor = "black";
    }

    else{
      document.body.style.backgroundColor = "white";
    }
  }

  return (

    <div className="App">
      
      <button id="toggleButton" onClick={handleToggleButton}>{mode ? 'Make Dark Mode': 'Make Light Mode'}</button>
      
    </div>
  );
}

export default App;
