import React from 'react';
import './Protfolio.css';
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'CryptoBankHub',
    description: 'A secure platform for managing cryptocurrency transactions and storage.',
    github: 'https://github.com/IamShariff/CryptoBankHub',
    demo: 'https://google.com',
  },
  {
    id: 2,
    image: IMG2,
    title: 'NexaVault',
    description: 'A decentralized application for storing and sharing sensitive data securely.',
    github: 'https://github.com/IamShariff/nexa-vault',
    demo: 'https://google.com',
  },
  {
    id: 3,
    image: IMG3,
    title: 'RoutePlanner',
    description: 'An intelligent route optimization tool for efficient navigation.',
    github: 'https://github.com/IamShariff/route-planner',
    demo: 'https://google.com',
  },
  {
    id: 4,
    image: IMG4,
    title: 'WatchStoreWebApp',
    description: 'An e-commerce platform for buying and selling luxury watches.',
    github: 'https://github.com/IamShariff/WatchStoreWebApp',
    demo: 'https://google.com',
  },
  {
    id: 5,
    image: IMG5,
    title: 'KidKnect',
    description: 'A social platform connecting parents, educators, and children for better engagement.',
    github: 'https://github.com/IamShariff/KidKnect',
    demo: 'https://google.com',
  },
  {
    id: 6,
    image: IMG6,
    title: 'GemmaShine',
    description: 'A web application for managing and showcasing jewelry collections.',
    github: 'https://github.com/IamShariff/gemma-shine',
    demo: 'https://google.com',
  },
];

const Protfolio = () => {
  return (
    <section id="protfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container protfolio__container">
        {data.map(({ id, image, title, description, github, demo }) => (
          <article key={id} className="protfolio__item">
            <div className="protfolio__item-image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <p className="protfolio__item-description">{description}</p>
            <div className="protfolio__item-cta">
              <a href={github} className="btn" target="_blank" rel="noopener noreferrer">
                Github
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Protfolio;
