import './App.css';
import {useState} from 'react'

function App() {

  const [bgColor,setBgColor] = useState('#ffffff');

  const generateRandomColor = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setBgColor(randomColor);
  }

  const handleClickFunction = (e) => {
    const body = document.querySelector('body')
    body.style.background = getRandomColor();
    e.target.style.backgroundColor = body.style.background;
  }

  function getRandomColor(){
    let letters = '0123456789ABCDEF'
    let color = '#'
    
    for(let i=0;i<6;i++){
      color += letters [Math.floor(Math.random() * 16)]
    }
    return color;
  }

  return (

    <div class="container">

      <h1>Random Backgrond Color Change</h1>

      <button className="btn" onClick={handleClickFunction}>Change background color</button>

      <div>

      </div>

    </div>
  );
}

export default App;
