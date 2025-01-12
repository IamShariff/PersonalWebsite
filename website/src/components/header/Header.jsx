import React from 'react';
import './Header.css';
import CTA from './CTA';
import ME from '../../assets/dpp.png';
import HeaderSocial from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Md Sharif</h1>
        <h5 className="text-light">Full Stack Developer</h5>
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <h2 className="about-me-heading">About Me</h2>
        <div className="about-me">
          <p>
            Currently working as a Software Engineer at Nagarro for the past 2.6 years, where I've had the opportunity to contribute to diverse domains like BFSI, Quick Service Restaurants (QSR), and Artificial Intelligence (AI) projects.
          </p>
          <p>
            🛠️ My tech toolkit includes a wide range of stacks, including Java/Spring Boot, Ruby on Rails, Aurelia, Angular, React, and more. I’m passionate about delivering innovative solutions, building scalable applications, and adapting to new technologies quickly.
          </p>
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
