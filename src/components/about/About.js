import React from 'react'
import me from '../../rohit.png'
import './About.css'
import { AiFillHtml5 } from 'react-icons/ai'
import { FaReact } from 'react-icons/fa'
import { SiRedux } from 'react-icons/si'

const About = () => {
  return (
    <section id='about'>
      <h5>Hola!</h5>
      <h1>À PROPOS DE MOI</h1>
      <div className='container abouttcontainer' >
        <div className='aboutme'>
          <img src={me} alt="" />
        </div>
        <div className='aboutcontent'>
          <div className='aboutcards'>
            <article className='aboutcard'>
              <AiFillHtml5 />
              <h5>HTML & CSS</h5>
            </article>
            <article className='aboutcard'>
              <FaReact />
              <h5>React</h5>
            </article>
            <article className='aboutcard'>
              <SiRedux />
              <h5>Redux</h5>
            </article>
          </div>
          <p>Bonjour, Je m'appelle Rohit. I am a front end web developer.
            I see website from another perspective, I like to get away from the pervasive way of making webpages.
            I love to work on ReactJS, Redux, Hooks etc.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About