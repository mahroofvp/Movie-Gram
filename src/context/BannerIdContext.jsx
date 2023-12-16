import { createContext, useState } from "react";

 export const BannerIdContext = createContext(null)


 export const BannerIdProvider = ({children})=>{
    const [showVideo, setShowVideo] = useState(true);
    const [newId, setNewId] = useState('');
    

    const idHandleOnClick = (id)=> {
     setNewId(id)
     if(typeof(id) === ''){
       setShowVideo(true)
     }
   }
 console.log("id",typeof(id));

   const closeVideo = () => {
     setShowVideo(false);
     setNewId(null)
   };
 

     return(
     
     <BannerIdContext.Provider value={{newId, closeVideo,showVideo, idHandleOnClick}} >{children}</BannerIdContext.Provider>
     )
 }