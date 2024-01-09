import React from 'react'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Experience from './components/experience/Experience'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Protfolio from './components/protfolio/Protfolio'
import Services from './components/services/Services'
import Testimonials from './components/testimonials/Testimonials'
import Footer from './components/footer/Footer'

const App = () => {
  return (
   <>
   <Header/>
   <Nav/>
   <About/>
   <Experience/>
   <Services/>
   <Protfolio/>
   <Testimonials/>
   <Contact/>
   <Footer/>
   </>
  )
}

export default App
