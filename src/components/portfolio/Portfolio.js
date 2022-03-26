import React from 'react'
import './Portfolio.css'
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h1>Portfolio</h1>
      <div className='container portfoliocontainer'>
        <article className='portfolioitem'>
          <div className="portfolioitemimage">
            <img src="https://www.msipower.in/assets/img/logo.png" alt="" />
          </div>
          <h3>MSI ENTERPRISES</h3>
          <div className='portfolioitemcta'>
            <a href="https://www.msipower.in/">Live Webstie</a>
          </div>
        </article>
        <article className='portfolioitem'>
          <div className="portfolioitemimage">
            <img src="https://nexoza.co/wp-content/uploads/2021/10/new-logo-150x142.png" alt="" />
          </div>
          <h3>NEXOZA</h3>
          <div className='portfolioitemcta'>
            <a href="https://nexoza.co/">Live Webstie</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio