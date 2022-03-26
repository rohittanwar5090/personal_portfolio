import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {MdMarkEmailRead} from 'react-icons/md'
const HeaderSocial = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/rohittanwar5090/" target="blank"><BsLinkedin/></a>
        <a href="https://github.com/rohittanwar5090/" target="blank"><BsGithub/></a>
        <a href="#c" target="blank"><MdMarkEmailRead/></a>        
    </div>
  )
}

export default HeaderSocial