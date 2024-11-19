import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>THIS IS REDIRECTED PAGE</div>}/>

        <Route path="/about" element={<Navigate to="/"/>}/>
        <Route path="/home" element={<Navigate to="/"/>}/>
      </Routes>
    </Router>
  );
}

export default App;
  