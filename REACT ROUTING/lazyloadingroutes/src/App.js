import { Suspense,lazy } from 'react';
import './App.css';


const Home = lazy (() => import('./components/Home') );
 
function App() {
  return (
    <div className="App">
      <h1>Lazy Loading</h1>
      <Suspense fallback={<div>Please wait..</div>}>
        <Home/>
      </Suspense>
    </div>
  );
}

export default App;
