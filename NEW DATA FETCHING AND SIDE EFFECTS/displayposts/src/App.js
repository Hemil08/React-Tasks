import './App.css';
import { useState, useEffect } from 'react'

function App() {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  function fetchPosts() {

    setLoading(true)

    const API_URL = "https://jsonplaceholder.typicode.com/posts"

    fetch(API_URL,{method: "GET"})
      .then((response) => {
        return response.json();
      })

      .then((data) => {
        setPosts(data)
        setLoading(false)
      })
      .catch((error) => {
        setPosts(false)
        setLoading(false)
      })
  }

  useEffect(() => {

    setTimeout(fetchPosts,3000)

  }, [])

  return (
    <div className="App">

      <h1>--POSTS--</h1>

      {
        loading ? <p>loading...</p> :

          <ul>
            {
              posts.map((post) => {
                return (
                  <li key={post.id}>
                    <p>Title:- {post.title}</p>
                    <p>Body:- {post.body}</p>
                  </li>
                )
              })
            }
          </ul>
      }

    </div>
  );
}

export default App;
