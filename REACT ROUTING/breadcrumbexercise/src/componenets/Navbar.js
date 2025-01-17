import React from 'react'
import {Link} from 'react-router-dom' 

const Navbar = () => {
  return (
    <div className='navbar'>
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/about/team">TEAM</Link>
    </div>
  )
}

export default Navbar