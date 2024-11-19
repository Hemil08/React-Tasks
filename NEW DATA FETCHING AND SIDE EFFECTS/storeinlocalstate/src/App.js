import logo from './logo.svg';
import './App.css';
import {useEffect,useState} from 'react'

function App() {

  const[comments,setComments] = useState([]);

  useEffect(() => {
    // Fetch comments from API
    fetch('https://jsonplaceholder.typicode.com/comments')
    
    .then(response => response.json())
        
    .then(
      data => {
        setComments(data);
      }
    )
    
    .catch(error => console.log(error));
  }, []);

  return (
    <div className="App">
      <h1>Comments</h1>

      <ul>
        {
          comments.map(comment =>(
            <li key={comment.id} style={{listStyleType:"none"}}>
              <h3>{comment.name}</h3>
              <p>Email:{comment.email}</p>
              <p>{comment.body}</p>
              <hr/>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default App;
