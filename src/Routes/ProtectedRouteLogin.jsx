import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Navigate, Outlet } from 'react-router-dom'

export const ProtectedRouteLogin = () => {
    const { auth }=useContext(AuthContext)

    if (auth ||localStorage.getItem("auth_token")){
        return <Navigate to={"/home"}/>
    }
    return <Outlet/>
}

