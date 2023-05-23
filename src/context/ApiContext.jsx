import {  createContext, useEffect, useState } from "react";
import {TMDB_SEARCH_API} from '../Components/Constants/Constants'
import axios from "axios";
import { useDebounce } from "../customHooks/useDebounce";
export const ApiContext = createContext()

export const ApiProvider = ({children}) => {

    const [searchInputValue, setSearchInputValue] = useState("")
    const [searchList, setSearchList] = useState([])
    const [filteredList, setFilteredList] = useState([])
  const  handleChange = (e)=> {
    setSearchInputValue(e.target.value) 

    const newFilteredItems = searchList.filter(data=>{
      return data.title.toLowerCase().includes(e.target.value.toLowerCase())
    })
    setFilteredList(newFilteredItems)
  } 


    const fetchMovieList = async ()=>{
        const response =await axios(TMDB_SEARCH_API, {
         params: {
           query:"movie",
         }
        }); 
        setSearchList(response.data.results)
        
        setFilteredList(response.data.results)
       }

        
       useDebounce(fetchMovieList, 300)   
          
       
        


        const clearSearch =()=>{
          setSearchInputValue("")
          setFilteredList(searchList)
         
         }
 return(
 <ApiContext.Provider value={{searchInputValue,searchList,filteredList,handleChange,clearSearch}}>{children}</ApiContext.Provider>
 )
}