import React from 'react'
import {Link,Outlet} from 'react-router-dom';

const About = () => {
  return (
    <div>
        About Page

        <nav>
            <Link to="team">Team</Link> || <Link to="company">Company</Link>
        </nav>
        <Outlet/>
    </div>
  )
}

export default About;