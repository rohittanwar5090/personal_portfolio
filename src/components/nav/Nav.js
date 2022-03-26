import React, { useState } from 'react'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUserDelete} from 'react-icons/ai';
import {MdOutlineWorkOutline} from 'react-icons/md';
import {AiOutlinePhone} from 'react-icons/ai';
const Nav = () => {
  const [navactive, setNavactive] = useState('#')
  return (
    <div className='papa'>
        <nav>
          <a href="#" ><AiOutlineHome/></a>
          <a href="#about"><AiOutlineUserDelete/></a>
          <a href="#portfolio"><MdOutlineWorkOutline/></a>          
          <a href="#contact"><AiOutlinePhone/></a>
        </nav>
    </div>
  )
}

export default Nav