import React from 'react'
import './Protfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
    {
        id: 1,
        image: IMG1,
        title: 'CryptoBankHub',
        github: 'https://github.com/IamShariff/CryptoBankHub',
        demo: 'https://google.com'
    },
    {
        id: 2,
        image: IMG2,
        title: 'NoteShareX',
        github: 'https://github.com/IamShariff/ShareNoteX',
        demo: 'https://google.com'
    },
    {
        id: 3,
        image: IMG3,
        title: 'GameGearHub',
        github: 'https://github.com/IamShariff/GameGearHub',
        demo: 'https://google.com'
    },
    {
        id: 4,
        image: IMG4,
        title: 'WatchStoreWebApp',
        github: 'https://github.com/IamShariff/WatchStoreWebApp',
        demo: 'https://google.com'
    },
    {
        id: 5,
        image: IMG5,
        title: 'KeycloakUserManagement',
        github: 'https://github.com/Md-Sikanderr/Power-bi-project-1',
        demo: 'https://google.com'
    },
    {
        id: 6,
        image: IMG6,
        title: 'Crypto Currency Tracker',
        github: 'https://github.com',
        demo: 'https://google.com'
    },

]


const Protfolio = () => {
  return (
    <section id='protfolio'>
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>
        <div className="container protfolio__container">

            {
                data.map(({id,image,title,github,demo})=>{
                    return (
                <article key ={id} className='protfolio__item'>
                <div className="protfolio__item-image">
                    <img src={image} alt="" />
                </div>
                <h3>{title}</h3>
                <div className="protfolio__item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
                {/* <a href={demo}  className='btn btn-primary' target='_blank'>Live Demo</a> */}
                </div>
            </article>

                    )
                })
            }

        </div>
    </section>
  )
}

export default Protfolio