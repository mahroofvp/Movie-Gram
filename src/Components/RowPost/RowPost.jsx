import React, { useContext } from 'react'
import "./RowPost.css"
import { ApiContext } from '../../context/ApiContext'
import { TMDB_IMAGE_URL} from '../Constants/Constants'
export const RowPost = ({handleClick}) => {
  const {filteredList} = useContext(ApiContext)
  return (
    <div className='row'>
      <div className='pagination-div'>
        
      </div>
        {filteredList.map((data)=>(
          
          
          <div className="posters" key={data.id}>
            
          <img 
          className='poster' 
          style={{objectFit: "contain"}}
          src={`${TMDB_IMAGE_URL}${data.poster_path}` } 
          onClick={()=>handleClick(data.id)}
          
          />
          
         </div>
        ))}
        
    </div> 
  )
}

