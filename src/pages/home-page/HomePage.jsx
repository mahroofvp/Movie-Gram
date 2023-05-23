import React, { useContext} from 'react'
import {NavBar} from '../../Components/NavBar/NavBar'
import {Banner} from '../../Components/Banner/Banner'
import { RowPost } from '../../Components/RowPost/RowPost'
import './homePage.css'
import { ApiContext } from '../../context/ApiContext'
import { ThemeContext } from '../../context/ThemeContext'

export const HomePage = () => {
const {filteredList} = useContext(ApiContext);
const {theme,toggleTheme} = useContext(ThemeContext)

  return (
    <div className='home-page-main-div'>
        <NavBar />
        <Banner />
        <RowPost filteredList={filteredList}/>
    
    </div>
  )
}
