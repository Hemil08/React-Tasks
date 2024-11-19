import {useState,useEffect} from 'react'
import './App.css';

function App() {

  const [counter,setCounter] = useState(10);

  useEffect(() => {

    const interval = setInterval(() => {
      setCounter(counter =>{
        if(counter > 0){
          return counter-1;
        }

        else{
          clearInterval(interval);
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  },[]);

  return (
    <div className="App">
      <p>COUNTDOWN :- {counter}</p>
      {counter === 0 && <p>Time is Over!</p>}
    </div>
  );
}

export default App;
