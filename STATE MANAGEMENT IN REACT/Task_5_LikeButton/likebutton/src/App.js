import './App.css';
import {useState} from 'react'

function App() {

  const [show,setShow] = useState(true)

  const likeButton = document.getElementById('likeButton')
  const para = document.getElementById('para')
  

  function onhandleLikeButton(){
    setShow(!show)

    if(show === false){
      likeButton.innerHTML = "DisLike";
      para.innerText = "Dislike"
    }

    else{
      likeButton.innerHTML = "Like";
      para.innerText = "Like"
    }
  }

  return (
    <div className="App">
      <button id="likeButton" onClick={onhandleLikeButton}>Like</button>

       <p id="para">like</p> 
      
      
    </div>
  );
}

export default App;
