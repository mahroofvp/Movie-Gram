import React, { useContext } from 'react'
import "./NavBar.css"
import clapper from '../../assets/clapperboard.png'
import {useNavigate} from "react-router-dom";
import { ThemeContext } from '../../context/ThemeContext'
import { AuthContext } from '../../context/AuthContext'
import { ThemeBtn } from '../theme-btn/ThemeBtn'
export const NavBar = () => {

  const navigate = useNavigate();

  const {theme,toggleTheme} = useContext(ThemeContext)
  
  const {logout} = useContext(AuthContext)

 const logoutUser = ()=> {
  logout()
  navigate("/");

 };

  return (
    <div className='navbar'>
        <img className='avatar'  src={clapper} alt="Avatar Image" />
        <h2>MovieGram</h2>

<div className='logoutbtn-themeswitch-container'>
        <div className='theme-switch'>
        <ThemeBtn/>
        </div>
        <div>
          <button className='logout-btn' onClick={logoutUser}>Logout</button>
        </div>
        </div>
</div>
  )
}

