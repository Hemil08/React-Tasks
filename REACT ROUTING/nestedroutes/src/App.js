import {createBrowserRouter,RouterProvider} from "react-router-dom"
import './App.css';
import Home from "./components/Home";
import About from "./components/About";
import Team from "./components/Team";
import Company from "./components/Company";

const router = createBrowserRouter(
  [

    {
      path:"/",
      element:<Home/>
    },

    {
      path:"/about",
      element:<About/>,

      children: [
        {
          path:"team",
          element:<Team/>
        },
    
        {
          path:"company",
          element:<Company/>
        }
      ]
    }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
