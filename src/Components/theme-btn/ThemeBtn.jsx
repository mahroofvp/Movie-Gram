import React, { useContext } from 'react'
import dark from '../../assets/icons/dark.png'
import light from '../../assets/icons/light.png'
import { ThemeContext } from '../../context/ThemeContext'
import './themebtn.css'
export const ThemeBtn = () => {
const {theme, toggleTheme} = useContext(ThemeContext)
  return (
    <div className='theme-icon-div'>
        {theme === "dark"?
        <img onClick={toggleTheme} src={dark} alt="icon" />:
        <img onClick={toggleTheme} src={light} alt="icon" />
    }
    </div>
  )
}