import React from 'react'
import { BsSun, BsMoon } from 'react-icons/bs'
import './ThemeToggle.css'

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {theme === 'dark' ? <BsSun /> : <BsMoon />}
    </button>
  )
}

export default ThemeToggle
