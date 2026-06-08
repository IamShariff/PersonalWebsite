import React, { useState, useEffect } from 'react'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Experience from './components/experience/Experience'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Protfolio from './components/protfolio/Protfolio'
import Services from './components/services/Services'
import Testimonials from './components/testimonials/Testimonials'
import Footer from './components/footer/Footer'
import ThemeToggle from './components/theme/ThemeToggle'

const App = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }

  return (
   <>
   <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
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
