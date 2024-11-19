import {useState} from 'react'
import './App.css';

function App() {

  const [input,setInput] = useState('');

  function handleSubmitButton() {
    const value= input;
    const para = document.createElement('p');
    para.innerText = value;
    const form = document.getElementById('form')
    form.appendChild(para);

    // Empty the input box after entering value to form
    const inputValue = document.getElementById('inputField')
    inputValue.value = ' '
  }

  return (
    <div>
      <div class="container">
        <input type="text" id="inputField" name="Input Field" onInput={e => setInput(e.target.value)}></input>
        <button class="submit" onClick={handleSubmitButton}>Submit</button>

        <div id="form">
          
        </div>
      </div>
    </div>
  );
}

export default App;
