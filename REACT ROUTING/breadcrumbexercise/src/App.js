import './App.css';
import About from './componenets/About';
import Breadcrumb from './componenets/Breadcrumb';
import Home from './componenets/Home';
import Team from './componenets/Team';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Navbar from './componenets/Navbar';

function App() {
  return (

    <Router>
      <Breadcrumb/>
      <br/>
      <Navbar/>
       <div className="App">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="about/" element={<About/>}/>
            <Route path="/about/team" element={<Team/>}/>
          </Routes>
      </div>
    </Router>

   
  );
}

export default App;
