
import './App.css';
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import User from './User';

const router = createBrowserRouter(
  [
    {
      path:"/user/:userId",
      element: <User/> ,
    }
  ]
)

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
