import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
   <div className="header__socials">
    <a href='https://www.linkedin.com/in/md-sharif-5019ba117/' target="_blank"><BsLinkedin/></a>
    <a href='https://github.com/IamShariff/Sharif' target="_blank"><FaGithub/></a>
   </div>
  )
}

export default HeaderSocials