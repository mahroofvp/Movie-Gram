import React, { useContext, useState} from 'react'
import crossIcon from "../../assets/icons/cross-icon.png"
import { ApiContext } from '../../context/ApiContext'
import YouTube from 'react-youtube'
import "./Banner.css"
import { BannerIdContext } from '../../context/BannerIdContext'
export const Banner = () => {

  const [showVideo, setShowVideo] = useState(true);
 
       const {newId, closeVideo} =useContext(BannerIdContext)
 
  const opts = {
    
    height: "360",
    width:"640",
    
    playerVars: {
      
      autoplay: 1,
      controls:1,
    },
  }
 
 
  const {searchInputValue,handleChange, clearSearch} = useContext(ApiContext)
  
  return (
    <div className='banner'>
      
        <div className='content'>
        {!newId && <input 
        value={searchInputValue} 
        type="text"onChange={handleChange}  
        placeholder='Search your movie...'
         />}
        {searchInputValue && <button onClick={clearSearch} >
        <img 
          style={{ objectFit: "contain", height:"35px" ,width:"35px", }}
          src={crossIcon}
          alt=""
        />
      </button>}

        </div>
      {newId && showVideo && (

      <div className='youtube-container'>
       <div className='youtub-div'>

        <YouTube className='youtube' opts={opts} videoId={newId.key} />
        </div>
        <div className='close-btn-div'>
        <button className='close-btn' onClick={closeVideo}>close</button>
        </div>
      </div>
      )
        }
       
    </div>
  )
}

