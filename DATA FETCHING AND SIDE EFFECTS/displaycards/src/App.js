import {useState,useEffect} from 'react'
import './App.css';
import './index.css'

function App() {

  const [loading,setLoading] = useState(false)
  const [cards,setCards] = useState([])

  function fetchCards(){
    setLoading(true)
    const API_URL = "https://jsonplaceholder.typicode.com/photos"
    fetch(API_URL,{method:"GET"})
    .then((response)=>{
      return response.json();
    })
    .then((data)=>{
      setCards(data)
      setLoading(false)
    })
    .catch((error)=>{
      console.log(error); 
      setLoading(false)
    })
  }

  useEffect(()=>{   
    fetchCards();
  },[])


  return (
    <div className="App">

      <h1>PHOTO APP</h1>

      <div className='imageSection'>

      { loading? <p>loading.....</p> : 

        cards.map((item)=>{
          return(
            <div key={item.id} className=''>
              <img className='image' src={item.url} alt="productImage" />
              <p>{item.title}</p>
            </div>
          )
        })  
      }

      {
        
      }
      </div>

    </div>
  );
}

export default App;