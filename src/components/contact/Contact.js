import React from 'react'
import './Contact.css'
import {FiMail} from 'react-icons/fi'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4eyo6r7', 'template_i3pnj4c', form.current, 'OJXBfnuYIut9ShQKX')
     e.target.reset();
  };
  return (
    <div>
      <section id='contact'>
        <h3>Get In Touch</h3>
        <h2>Contact Me</h2>
        <div className="container contactcontainer">
          <div className='contactoptions'>
            <article className='contactoption'>
              <FiMail/>
              <h4>Email</h4>
              <h3>rohittanwar5090@gmail.com</h3>
              <a href="mailto:rohittanwar@gmail.com" target='blank'>Send a Message</a>
            </article>
            <article className='contactoption'>
              <BsWhatsapp/>
              <h4>WhatsApp</h4>
              <h3>+91-9911456500</h3>
              <a href="https://api.whatsapp.com/send?phone=+91-9911456500" target='blank'>Let's Chat</a>
            </article>
            </div>
            {/* end of contact options */}
            <form ref={form} onSubmit={sendEmail}>
              <input type="text " name='name' placeholder='Your Name Required' required />
              <input type="email " name='email' placeholder='Your Email Required' required />
              <textarea name="message" placeholder='Your Message'  rows="7" required></textarea>
              <button type='submit' className='btn btn-primary'>Connect</button>
            </form>            
          </div>
      </section>
    </div>
  )
}

export default Contact