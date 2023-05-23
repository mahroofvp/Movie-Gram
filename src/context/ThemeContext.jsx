import {createContext, useState } from "react";

export const ThemeContext = createContext(null);

export const ThemeContextProvider = ({children})=>{
    const [theme, setTheme] = useState("dark")

    const toggleTheme = ()=>{
        setTheme((crnt) =>(crnt === "dark" ? "light" : "dark"))
    }



  return (
      <ThemeContext.Provider value={{theme, toggleTheme}}>{children}</ThemeContext.Provider>
      )  
}


