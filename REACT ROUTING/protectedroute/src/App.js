import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute';
import Home from './components/Home';
import Contact from './components/Contact';
import Login from './components/Login';
import './App.css';

const router= createBrowserRouter(
  [
    {
      path:"/login",
      element:<Login/>
    },

    {
      element:<ProtectedRoute/>,

      children: [
        {
          path:"/",
          element:<Home/>,
        },

        {
          path:"/contact",
          element:<Contact/>
        }
      ]
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
