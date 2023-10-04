import React, { useContext, useState} from 'react'
import {NavBar} from '../../Components/NavBar/NavBar'
import {Banner} from '../../Components/Banner/Banner'
import { RowPost } from '../../Components/RowPost/RowPost'
import './homePage.css'
import { ApiContext } from '../../context/ApiContext'
import { ThemeContext } from '../../context/ThemeContext'
import axios from 'axios'


export const HomePage = () => {

const {filteredList} = useContext(ApiContext);
const {theme,toggleTheme} = useContext(ThemeContext)
const [id, setId] = useState('')
const [youtubeId, setYoutubeId] = useState('')

const handleClick = (id)=>{ 
      
  setId(id)
  axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=767be0d7efcb1fb4126215e03f7467ff`)
  .then(response=>{
    if(response.data.results.length !==0){
      setYoutubeId(response.data.results[0])
    }
  })
}

  return (
    <div className='home-page-main-div'>
        <NavBar />
        <Banner id={youtubeId} />
        <RowPost filteredList={filteredList} handleClick={handleClick}/>
    
    </div>
  )
}
