import React, { useContext } from 'react'
import "./RowPost.css"
import { ApiContext } from '../../context/ApiContext'
const TMDB_IMAGE_URL='https://image.tmdb.org/t/p/w500/'
export const RowPost = () => {
  const {filteredList} = useContext(ApiContext)
  return (
    <div className='row'>
        {filteredList.map((data)=>(
          
          
          <div className="posters" key={data.id}>
            
          <img 
          className='poster' 
          style={{objectFit: "contain"}}
          src={`https://image.tmdb.org/t/p/w500/${data.poster_path}` } 
          
          />
          
         </div>
        ))}
        
    </div> 
  )
}

