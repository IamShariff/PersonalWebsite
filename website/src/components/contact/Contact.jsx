import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_m8wn8m8', 'template_thvkfhn', form.current, '-IL2AXkwiEpYMnVY9')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      };
  return (
    <section id='contact'>
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>

        <container className="container contact__container">
            <div className="contact__options">
            <article className='contact__option'>
                <MdOutlineEmail className='contact__option-icon'/>
                <h4>Email</h4>
                <h5>iamsharif098@gmail.com</h5>
                <a href="mailto:mdsikander2000@gmail.com" target="_blank">Send a Message</a>
            </article>

            <article className='contact__option'>
                <BsWhatsapp className='contact__option-icon'/>
                <h4>Whatsapp</h4>
                <h5>Connect on Whatsapp</h5>
                <a href="https://wa.me/9871201195" target="_blank">Send a Message</a>
            </article>

            <article className='contact__option'>
                <RiMessengerLine className='contact__option-icon'/>
                <h4>Messenger</h4>
                <h5>Connect on Facebook</h5>
                <a href="https://m.facebook.com/100018466323466/" target="_blank">Send a Message</a>
            </article>
            </div>
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name='name' placeholder='Your Full Name' required />
                <input type="email" name='email' placeholder='Your Email' required />
                <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
                <button type='submit'className='btn btn-primary'>Send Message</button>
            </form>
        </container>
    </section>
  )
}

export default Contact