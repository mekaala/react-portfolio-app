import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/NavBar.css'

function NavBar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    const [isScrolling, setIsScrolling] = useState(false);

  return (
    <div className="navbar" id="navbar" onScroll={() => {setIsScrolling(!isScrolling)}}>
        <Link to="/" onClick={() => {setIsNavExpanded(false)}} className="name"><h2>Mekaal Ahmad</h2></Link>
        <button className={isNavExpanded ? 'open-hamburger' : 'hamburger'} onClick={() => {setIsNavExpanded(!isNavExpanded)}}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
            <path fill-rule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
            </svg>
        </button>
        <nav className={ isNavExpanded ? 'expanded' : ''}>
            <Link to="/" onClick={() => {setIsNavExpanded(false)}}>HOME</Link>
            <Link to="/about" onClick={() => {setIsNavExpanded(false)}}>ABOUT</Link>
            <Link to="/projects" onClick={() => {setIsNavExpanded(false)}}>PROJECTS</Link>
            <Link to="/photography" onClick={() => {setIsNavExpanded(false)}}>PHOTOGRAPHY</Link>
            {/* <Link to="/" onClick={() => {setIsNavExpanded(false)}}>RESUME</Link> */}
            {/* <Link to="/" onClick={() => {setIsNavExpanded(false)}}>CONTACT</Link> */}
        </nav>
    </div>
  )
}

export default NavBar