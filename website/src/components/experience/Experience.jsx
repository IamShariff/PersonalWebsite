import React from 'react';
import './Experience.css';
import { BsPatchCheckFill } from 'react-icons/bs';
import { Tilt } from 'react-tilt';

import { motion } from 'framer-motion';

const frontendSkills = [
  { id: 1, skill: 'HTML', level: 'Experienced' },
  { id: 2, skill: 'CSS', level: 'Intermediate' },
  { id: 3, skill: 'JavaScript', level: 'Intermediate' },
  { id: 4, skill: 'React', level: 'Intermediate' },
  { id: 5, skill: 'Angular', level: 'Intermediate' },
  { id: 6, skill: 'TypeScript', level: 'Intermediate' },
];

const backendSkills = [
  { id: 1, skill: 'Java', level: 'Experienced' },
  { id: 2, skill: 'SpringBoot', level: 'Experienced' },
  { id: 3, skill: 'Hibernate', level: 'Experienced' },
  { id: 4, skill: 'Kafka', level: 'Experienced' },
  { id: 5, skill: 'Ruby on Rails', level: 'Experienced' },
  { id: 6, skill: 'PostgreSQL', level: 'Experienced' },
];

const Experience = () => {
  return (
    <section id="experience">
      <motion.h5
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        What Skills I Have
      </motion.h5>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        My Experience
      </motion.h2>

      <div className="container experience__container">
        {/* Frontend Skills */}
        <motion.div
          className="experience__frontend"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {frontendSkills.map(({ id, skill, level }) => (
              <Tilt className="tilt" options={{ max: 25, scale: 1.05, speed: 400 }} key={id}>
                <article className="experience__details">
                  <BsPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>{skill}</h4>
                    <small className="text-light">{level}</small>
                  </div>
                </article>
              </Tilt>
            ))}
          </div>
        </motion.div>

        {/* Backend Skills */}
        <motion.div
          className="experience__backend"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3>Backend Development</h3>
          <div className="experience__content">
            {backendSkills.map(({ id, skill, level }) => (
              <Tilt className="tilt" options={{ max: 25, scale: 1.05, speed: 400 }} key={id}>
                <article className="experience__details">
                  <BsPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>{skill}</h4>
                    <small className="text-light">{level}</small>
                  </div>
                </article>
              </Tilt>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
