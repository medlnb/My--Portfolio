import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

function Navbar() {
  const [activeLink, setactiveLink] = useState(window.location.pathname)

  return (
    <header className='headers'>
      <nav className='navbar'>
        <Link
          to={"/"}
          onClick={()=>setactiveLink("/")}
          className={("/" == activeLink) ?
            'notactive_navbar_element active_navbar_element' :
            'notactive_navbar_element'}>
          _hello
        </Link>
        <Link
          to={"/about_me"}
          onClick={() => setactiveLink("/about_me")}
          className={("/about_me" == activeLink) ?
            'notactive_navbar_element active_navbar_element' :
            'notactive_navbar_element'}>
          _about me
        </Link>
        <Link
          to={"/projects"}
          onClick={() => setactiveLink("/projects")}
          className={('/projects' == activeLink) ?
            'notactive_navbar_element active_navbar_element' :
            'notactive_navbar_element'}>
          _projects
        </Link>
        <Link
          to={"/skills"}
          onClick={() => setactiveLink("/skills")}
          className={("/skills" == activeLink) ?
            'notactive_navbar_element active_navbar_element' :
            'notactive_navbar_element'}>
          _Skills
        </Link>
      </nav>
    </header>
  )
}

export default Navbar