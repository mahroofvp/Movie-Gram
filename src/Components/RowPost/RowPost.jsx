import React, { useContext } from 'react'
import "./RowPost.css"
import { ApiContext } from '../../context/ApiContext'
import { TMDB_IMAGE_URL} from '../Constants/Constants'
import { ThemeContext } from '../../context/ThemeContext'
import { BannerIdContext } from '../../context/BannerIdContext'

export const RowPost = ({handleClick}) => {
  const {filteredList} = useContext(ApiContext)
  const {theme} = useContext(ThemeContext)

  
  return (
    <div className='row-post-main' >
      <div className='wrapper-div' id={theme} >

        
        {filteredList?.map((data)=>(
          
          <div className="posters" key={data.id}>
            
          <img 
          className='poster' 
         
          
          src={`${TMDB_IMAGE_URL}${data.poster_path}`} 
          alt={''}
          onClick={()=>handleClick(data.id)}
          
          />
          
         </div>
        ))}
      </div>
        
        
        
    </div> 
  )
}

