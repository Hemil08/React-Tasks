import { useState } from "react"
import './App.css';

function App() {

  const [show, setShow] = useState(true)

  return (
    <div className="App">

      <button onClick={() => setShow(!show)}>Toggle</button>

      {show ? <p>Smallest directly families surprise honoured am an.
        peaking replying mistress him numerous she returned feelings may day.
        Evening way luckily son exposed get general greatly.
        Zealously prevailed be arranging do. Set arranging too dejection september happiness.
        Understood instrument or do connection no appearance do invitation.
        Dried quick round it or order. Add past see west felt did any.
        Say out noise you taste merry plate you share. My resolve arrived is we chamber be removal.
      </p> : null}

      {console.log(show)}

    </div>
  );
}

export default App;
