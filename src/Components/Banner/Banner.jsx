import React, { useContext} from 'react'
import pandavdeo from "../../assets/video/panda.mp4"
import crossIcon from "../../assets/icons/cross-icon.png"
import { ApiContext } from '../../context/ApiContext'
import YouTube from 'react-youtube'
import "./Banner.css"
export const Banner = ({id}) => {
  const opts = {
    
    height: "380",
    width:"10000",
    
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  }
 
  const {searchInputValue,handleChange, clearSearch} = useContext(ApiContext)
  
  return (
    <div className='banner'>
      <video  src={pandavdeo} autoPlay  loop muted/>
        <div className='content'>
        {!id && <input value={searchInputValue} type="text"onChange={handleChange}  placeholder='Search here...' />}
        {searchInputValue && <button onClick={clearSearch} >
        <img 
          style={{ objectFit: "contain", height:"35px" ,width:"35px", }}
          src={crossIcon}
          alt=""
        />
      </button>}

        </div>
      {id && <YouTube className='youtube' opts={opts} videoId={id.key}/>}
       
    </div>
  )
}

