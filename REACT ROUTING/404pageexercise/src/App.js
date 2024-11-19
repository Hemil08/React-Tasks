import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Home from "./components/Home";
import './App.css';
import NotFound from "./components/NotFound";

const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"*",
    element:<NotFound/>
  }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
