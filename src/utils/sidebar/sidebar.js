import React, { memo } from 'react'
import './sidebar.css'
const Sidebar = ({hide}) => {
  return (
    <div style={hide ? { transform: "translateX(100%)" } : { transform: "translateX(0%)" }} id='sidebar' className='main-sidebar'>
    <ul>
        <li>About</li>
        <li>Services</li>
        <li>Connect</li>
        <li>Join Us</li>
    </ul>
    </div>
  )
}

export default memo(Sidebar)