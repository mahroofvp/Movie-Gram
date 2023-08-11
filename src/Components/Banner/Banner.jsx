import React, { useContext, useEffect} from 'react'


import "./Banner.css"
import pandavdeo from "../../assets/video/panda.mp4"
import crossIcon from "../../assets/icons/cross-icon.png"
import { ApiContext } from '../../context/ApiContext'
export const Banner = () => {
 
  const {searchInputValue,handleChange, clearSearch} = useContext(ApiContext)
  
  return (
    <div className='banner'>
      <video src={pandavdeo} autoPlay  loop muted/>
        <div className='content'>
        <input value={searchInputValue} type="text"onChange={handleChange}  placeholder='Search here...' />
        {searchInputValue&&<button onClick={clearSearch} >
        <img 
          style={{ objectFit: "contain", height:"35px" ,width:"35px", }}
          src={crossIcon}
          alt=""
        />
      </button>}

        </div>
       
    </div>
  )
}

