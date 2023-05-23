import React, { useEffect, useState } from 'react'

export const useDebounce = (value, delay) => {
   
    
 useEffect(() => {
    const timeout = setTimeout(() => {
        
        value()
        
    },delay);
     
   return () => {
     clearTimeout(timeout)

   }
 }, [])
 
   
 
}

 