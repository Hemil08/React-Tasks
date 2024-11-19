import {useState,useEffect} from 'react'
import './App.css';

function App() {

  const[selectedColor,setSelectedColor] = useState('white');

  useEffect(() => {

    if(selectedColor ===   "black"){
      document.div.style.color = "white";
    }

    document.body.style.backgroundColor = selectedColor;
  },[selectedColor])

  function handleColorChange (e) {
    setSelectedColor(e.target.value)
  }

  return (
    <div className="App">
      <h2>Select a Background Color:</h2>
      <select value={selectedColor} onChange={handleColorChange}>
        <option value="white">White</option>
        <option value="AliceBlue">AliceBlue</option>
        <option value="AntiqueWhite">AntiqueWhite</option>
        <option value="BlueViolet">BlueViolet</option>
        <option value="CadetBlue">CadetBlue</option>
        <option value="Crimson">Crimson</option>
        <option value="Black">Black</option>
      </select>

      
      <p>Current Background Color: {selectedColor}</p>
    </div>
  );
}

export default App;
