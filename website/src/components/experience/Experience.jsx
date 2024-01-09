import React from 'react'
import './Experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
        <h5>What Skills I have</h5>
        <h2>My Experience</h2>
        <div className="container experience__container">
            <div className="experience__frontend">
                <h3>Frontend Development</h3>
                <div className="experience__content">
                    <article className='experience__details'>
                        <BsPatchCheckFill className = 'experience__details-icon'/>
                        <div>
                        <h4>HTML</h4>
                        <small className='text-light'>Experienced</small>
                        </div>
                    </article>

                    <article className='experience__details'>
                        <BsPatchCheckFill className = 'experience__details-icon'/>
                        <div>
                        <h4>CSS</h4>
                        <small className='text-light'>Intermediate</small>
                        </div>
                    </article>

                    <article className='experience__details'>
                        <BsPatchCheckFill className = 'experience__details-icon'/>
                        <div>
                        <h4>Javascript</h4>
                        <small className='text-light'>Intermediate</small>
                        </div>
                    </article>

                    <article className='experience__details'>
                        <BsPatchCheckFill className = 'experience__details-icon'/>
                       <div>
                       <h4>React</h4>
                        <small className='text-light'>Intermediate</small>
                       </div>
                    </article>

                    <article className='experience__details'>
                        <BsPatchCheckFill className = 'experience__details-icon'/>
                        <div>
                        <h4>Angular</h4>
                        <small className='text-light'>Intermediate</small>
                        </div>
                    </article>

                    <article className='experience__details'>
                        <BsPatchCheckFill className = 'experience__details-icon'/>
                        <div>
                        <h4>TypeScript</h4>
                        <small className='text-light'>Intermediate</small>
                        </div>
                    </article>
                </div>
            </div>


            <div className="experience__backend">
            <h3>Backend</h3>
                <div className="experience__content">
                <article className='experience__details'>
                        <BsPatchCheckFill className = 'experience__details-icon'/>
                       <div>
                       <h4>Java</h4>
                        <small className='text-light'>Experienced</small>
                       </div>
                    </article>
                    <article className='experience__details'>
                        <BsPatchCheckFill className = 'experience__details-icon'/>
                       <div>
                       <h4>SpringBoot</h4>
                        <small className='text-light'>Experienced</small>
                       </div>
                    </article>

                    <article className='experience__details'>
                        <BsPatchCheckFill className = 'experience__details-icon'/>
                        <div>
                        <h4>Hibernate</h4>
                        <small className='text-light'>Experienced</small>
                        </div>
                    </article>

                    <article className='experience__details'>
                        <BsPatchCheckFill className = 'experience__details-icon'/>
                        <div>
                        <h4>Kafka</h4>
                        <small className='text-light'>Experienced</small>
                        </div>
                    </article>

                    <article className='experience__details'>
                        <BsPatchCheckFill className = 'experience__details-icon'/>
                       <div>
                       <h4>Maven</h4>
                        <small className='text-light'>Experienced</small>
                       </div>
                       
                    </article>
                    <article className='experience__details'>
                        <BsPatchCheckFill className = 'experience__details-icon'/>
                       <div>
                       <h4>PostgreSql</h4>
                        <small className='text-light'>Experienced</small>
                       </div>
                       </article>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Experience