import './App.css';
import {useState,useEffect} from 'react';

function App() {

  const [posts,setPosts] = useState([]);

  function fetchPosts(){
    const API_URL = "https://jsonplaceholder.typicode.com/posts"
    fetch(API_URL,{method:"GET"})
    .then((response)=>{
      return response.json();
    }) 
    .then((data)=>{
      setPosts(data);
    })
    .catch((error)=>{
      console.log(error);
    })
  }

  useEffect( ()=>{
    fetchPosts();

    const intervalTime = setInterval(fetchPosts,5000);

    clearInterval(intervalTime);

  },[])

  return (
    <div className="App">
      <h1>POSTS</h1>

      <ul>
        { posts.map((post) => (
              <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default App;
