import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div>
      Sidebar
        <ul>
            <li><Link to="/">About Me</Link></li>
            <li><Link to="/education">My Education</Link></li>
            <li><Link to="/skills">My Skills</Link></li>
            <li><Link to="/works">My Works</Link></li>
            <li><Link to="/contact">Contact Me</Link></li>
        </ul>
    </div>
  )
}

export default Sidebar