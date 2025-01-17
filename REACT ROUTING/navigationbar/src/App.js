import {createBrowserRouter,RouterProvider,} from "react-router-dom"
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import './App.css';

const router = createBrowserRouter(
  [
    {
      path:"/",
      element:
      <div>
        <Navbar/>
        <Home/>
      </div>
    },

    {
      path:"/about",
      element:<div>
        <Navbar/>
        <About/>
      </div>
    },

    {
      path:"/contact",
      element:<div>
        <Navbar/>
        <Contact/> 
      </div>
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
