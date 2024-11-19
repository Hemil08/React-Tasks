import React from 'react'
import { useLocation } from "react-router-dom"
import { Link } from 'react-router-dom'

const Breadcrumbs = () => {

    const location = useLocation()
    let currentLink = ''

    const crumbs = location.pathname.split('/')
    .filter(crumb =>crumb !== '')
    .map((crumb,index) =>{
        currentLink += `${crumb}`

        return(
            <span key={index} className="crumb">
                    <Link to={currentLink}>
                        {crumb.charAt(0).toUpperCase() + crumb.slice(1)}
                    </Link>
                    {index < location.pathname  .split('/').filter(x => x !== '').length - 1 && (
                        <span className="separator"> &gt; </span>
                    )}
                </span>
        )
    })

  return (
    <div className='breadcrumbs'>
            <Link to="/">Home</Link>
            {crumbs.length > 0 && <span className="separator"> &gt; </span>}
            <div className='breadcrumbs_nav'>{crumbs}</div>
        </div>
  )
}

export default Breadcrumbs