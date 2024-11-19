import Home from './components/Home';
import Contact from './components/Contact';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import './App.css';

const router = createBrowserRouter(
  [
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/contact",
      element:<Contact/>
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
