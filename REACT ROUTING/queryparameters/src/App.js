import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import SearchPage from './SearchPage';
import './App.css';

function App() {
  return (
    <Router> 
      <Routes>
        <Route path="/search" element={<SearchPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
