import React, { useContext, useState} from 'react'
import {NavBar} from '../../Components/NavBar/NavBar'
import {Banner} from '../../Components/Banner/Banner'
import { RowPost } from '../../Components/RowPost/RowPost'
import './homePage.css'
import { ApiContext } from '../../context/ApiContext'
import axios from 'axios'
import { ThemeContext } from '../../context/ThemeContext'
import { BannerIdContext } from '../../context/BannerIdContext'


export const HomePage = () => {


const [id, setId] = useState('')

const {theme} = useContext(ThemeContext)
const { idHandleOnClick } = useContext(BannerIdContext)


const handleClick = (id)=>{ 
      
  setId(id)
  axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=767be0d7efcb1fb4126215e03f7467ff`)
  .then(response=>{
    
    if(response.data.results.length !==0){
     
      idHandleOnClick(response.data.results[0])
     
    }
  })
}


  return (
    <div className='home-page-main-div' id={theme} >

      <div  className='home-page-wrapper-div' id={theme}>
      </div>
        <NavBar />
        <Banner />
        <RowPost  handleClick={handleClick}/>

    </div>
  )
}
