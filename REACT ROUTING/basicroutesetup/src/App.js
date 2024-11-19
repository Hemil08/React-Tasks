import{createBrowserRouter,RouterProvider,} from "react-router-dom"
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import './App.css';

const router = createBrowserRouter(
  [
    {
      path:"/",
      element:<Home/>
    },
    
    {
      path:"/about",
      element:<About/>
    },

    {
      path:"/contact",
      element:<Contact/>
    },
  ]
);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
