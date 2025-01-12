import React from 'react';
import './About.css';

const educationData = [
  {
    id: 1,
    year: '2017 - 2020',
    title: 'Bachelor of Computer Applications',
    description: 'Graduated with distinction from Jamia Hamdard, building a strong foundation in programming and software development.',
  },
  {
    id: 2,
    year: '2020 - 2022',
    title: 'Master of Computer Applications',
    description: 'Completed postgraduation with distinction, enhancing technical expertise and problem-solving skills.',
  },
];

const experienceData = [
  {
    id: 1,
    year: '2022 - Current',
    title: 'Software Engineer - Nagarro',
    description: 'Contributing to diverse projects in BFSI, Quick Service Restaurants (QSR), and Artificial Intelligence (AI) domains.',
  },
  {
    id: 2,
    year: '2021 - 2022',
    title: 'Intern - Software Development',
    description: 'Worked with AI Council for for car prediction machine learning model.',
  },
];

const About = () => {
  return (
    <section id="about">
      <h5>Discover</h5>
      <h2>My Journey</h2>

      <div className="container about__container">
        {/* Right Section: Timeline */}
        <div className="about__journey">
          {/* Education Section */}
          <div className="journey__section">
            <h3>Education</h3>
            {educationData.map(({ id, year, title, description }) => (
              <div key={id} className="journey__card">
                <div className="journey__timeline">
                  <span>{year}</span>
                  <div className="journey__line"></div>
                </div>
                <div className="journey__details">
                  <h4>{title}</h4>
                  <p>{description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Experience Section */}
          <div className="journey__section">
            <h3>Experience</h3>
            {experienceData.map(({ id, year, title, description }) => (
              <div key={id} className="journey__card">
                <div className="journey__timeline">
                  <span>{year}</span>
                  <div className="journey__line"></div>
                </div>
                <div className="journey__details">
                  <h4>{title}</h4>
                  <p>{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
