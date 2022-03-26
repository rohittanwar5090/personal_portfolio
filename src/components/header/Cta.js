import React from 'react'
import  resume from '../../rohit.pdf'

const Cta = () => {
  return (
    <div className="cta">
        <a href={resume} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let Connect</a>
    </div>
  )
}

export default Cta