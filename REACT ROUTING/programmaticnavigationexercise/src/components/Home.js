import React from 'react'
import {useNavigate} from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate();

    function handleClick(){
        navigate('/contact')
    }

  return (
    <div>
        
        Home Page

        <button onClick={handleClick}>
            Contact Us
        </button>
    </div>
  )
}

export default Home