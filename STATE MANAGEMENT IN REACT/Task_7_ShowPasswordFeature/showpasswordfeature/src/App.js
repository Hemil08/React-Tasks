import {useState} from 'react'
import './App.css';

function App() {

  const [showPassword,setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="App">
      <label>Password: </label>

      <input
        type={showPassword ? 'text' : 'password'}
      />

        <input
          type='checkbox'
          checked={showPassword}
          onChange={togglePasswordVisibility}
        />

    </div>
  );
}

export default App;
