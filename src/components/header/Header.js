import React from 'react'
import './Header.css'
import Cta from './Cta'
import me from '../../person.png'
import HeaderSocial from './HeaderSocial'


const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hi! I'm </h5>
        <h1>Rohit Tanwar</h1>
        <h5 className="text-light">FrontEnd Developer</h5>
        <Cta />
        <HeaderSocial />
        <div className="me">
          <img src={me} alt="pictiure" />
        </div>
      </div>
    </header>
  )
}

export default Header