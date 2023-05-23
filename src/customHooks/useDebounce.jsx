import React, { useEffect, useState } from 'react'

export const useDebounce = (value, delay, depandency) => {
   
    
 useEffect(() => {
    const timeout = setTimeout(() => {
        
        value()
        
    },delay);
     
   return () => {
     clearTimeout(timeout)

   }
 }, [...depandency])
 
   
 
}

 