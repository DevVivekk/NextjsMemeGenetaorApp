import React, { memo } from 'react'
import './sidebar.css'
import { MdOutlineArrowOutward } from "react-icons/md";
const Sidebar = ({hide}) => {
  return (
    <div style={hide ? { transform: "translateX(100%)" } : { transform: "translateX(0%)" }} id='sidebar' className='main-sidebar'>
    <ul>
        <li style={hide ? { transform: "translateX(400%)",transition: "all ease 0s 0s" } : { transform: "translateX(0%)" }}>About</li>
        <li style={hide ? { transform: "translateX(400%)",transition: "all ease 0s 0s" } : { transform: "translateX(0%)" }}>Services</li>
        <li style={hide ? { transform: "translateX(400%)",transition: "all ease 0s 0s" } : { transform: "translateX(0%)" }}>Connect</li>
        <li style={hide ? { transform: "translateX(400%)",transition: "all ease 0s 0s" } : { transform: "translateX(0%)" }}>Join Us</li>
        <li style={hide ? { transform: "translateX(400%)",transition: "all ease 0s 0s" } : { transform: "translateX(0%)" }}>Brown Paper <MdOutlineArrowOutward size={'3rem'} /></li>
    </ul>
    </div>
  )
}

export default memo(Sidebar)