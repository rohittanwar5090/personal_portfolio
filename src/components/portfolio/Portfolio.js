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
            <img src="https://wecarelife.in/wp-content/uploads/2019/10/cropped-Screenshot-2019-10-03-at-11.40.14-PM.png" alt="" />
          </div>
          <h3>We Care Life</h3>
          <div className='portfolioitemcta'>
            <a href="https://wecarelife.in/">Live Webstie</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio