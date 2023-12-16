import { useContext } from 'react'

import './App.css'
import { LoginForm } from './pages/Login-Form/LoginForm'
import { HomePage } from './pages/home-page/HomePage'
import { ThemeContext } from './context/ThemeContext'
import { Route, Routes, useLocation } from 'react-router-dom'
import {  ProtectedRouteLogin } from './Routes/ProtectedRouteLogin'
import { ProtectedRouteHome } from './Routes/ProtectedRouteHome'


const App = ()=> {
  const {theme} = useContext(ThemeContext)
 
  
 

  return (
    <div className='App'id={theme}>
    
     <Routes >

      <Route element={<ProtectedRouteLogin/>}>
      <Route path='/' element={<LoginForm/>} />
      </Route>

      <Route element={<ProtectedRouteHome/>}>
      <Route path='/home' element={<HomePage/>} />
      </Route>

     </Routes>
    </div>
  )
}

export default App
