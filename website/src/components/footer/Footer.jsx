import React from 'react'
import './Footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
        <ul className='permalinks'>
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#protfolio">Portfolio</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="footer__socials">
        <a href="https://www.facebook.com/profile.php?id=100007550768347" target="_blank"><FaFacebookF/></a>
        <a href='https://www.linkedin.com/in/md-sharif-5019ba117' target="_blank"><BsLinkedin/></a>
        <a href="https://twitter.com/mohdsharif559" target="_blank"><IoLogoTwitter/></a>
        </div>
        <div className="footer__copyright">
            <small>
                &copy; Made by Sharif. All rights reserved
            </small>
        </div>
    </footer>
  )
}

export default Footer