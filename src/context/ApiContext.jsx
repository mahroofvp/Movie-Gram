import {  createContext, useEffect, useState } from "react";
import {TMDB_SEARCH_API} from '../Components/Constants/Constants'
import {TMDB_MOVIE_LIST_API_} from '../Components/Constants/Constants'
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
  
  const data = async ()=> {
    try{

      const res = await axios.get(TMDB_MOVIE_LIST_API_,{
       
      })
      console.log(res.data);
    }catch(err){
      console.log(err);

    }
    
  }
  useEffect(()=>{
    data()
  },[])
  


  const fetchMovieList = async ()=>{
    const response =await axios (TMDB_SEARCH_API,{
      params:{
        query:"Movie",
      }
    }
    
    ); 
    setSearchList(response.data.results)
    console.log("hi"+response.data.total_results);
    
    setFilteredList(response.data.results)
  }
  
  useDebounce(fetchMovieList, 200)   
  
       const clearSearch =()=>{
         setSearchInputValue("")
         setFilteredList(searchList)
         
        }
 return(
 <ApiContext.Provider value={{searchInputValue,searchList,filteredList,handleChange,clearSearch}}>{children}</ApiContext.Provider>
 )
}