import { createContext, useEffect, useState } from "react";
import { TMDB_SEARCH_API } from '../Components/Constants/Constants'
import axios from "axios";
export const ApiContext = createContext()


export const ApiProvider = ({ children }) => {

  const [searchInputValue, setSearchInputValue] = useState('')
  const [defaultList, setDefaultList] = useState([])
  const [filteredList, setFilteredList] = useState([])

  const handleChange = (e) => {
    setSearchInputValue(e.target.value)

    const newFilteredItems = defaultList.filter(data => {
      return data.title.toLowerCase().includes(e.target.value.toLowerCase())
    })
    setFilteredList(newFilteredItems)

  }


  const data = async () => {
    try {
      const res = await axios.get(TMDB_SEARCH_API, {
        params: {
          query: "movie",
        }

      })

      // here I created goodDatas variable to get the datas which has the image or it will give blank space in our row post (app)
      const goodDatas = res.data.results.filter((data) => data.backdrop_path !== null)

      setDefaultList(goodDatas)

      setFilteredList(goodDatas)
    } catch (err) {
      console.log(err);

    }

  }

  useEffect(() => {
    data()
  }, [])



 


  const Fetchmovies = async () => {
    const response = await axios(TMDB_SEARCH_API, {
      params: {
        query: searchInputValue,
      },
    })

    setFilteredList(response.data.results)
  }
 

  useEffect(() => {
    if(searchInputValue !== ""){

      const timeout = setTimeout(() => {
        Fetchmovies()
      }, 600);
      return () => {
        clearTimeout(timeout)
      }
    }
  }, [searchInputValue])



  const clearSearch = () => {
    setSearchInputValue("")
    setFilteredList(defaultList)

  }


  return (
    <ApiContext.Provider value={{ searchInputValue, defaultList, filteredList, handleChange, clearSearch }}>{children}</ApiContext.Provider>
  )
}