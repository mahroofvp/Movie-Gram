import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ApiProvider } from './context/ApiContext.jsx'
import { ThemeContextProvider } from './context/ThemeContext.jsx'
import {BrowserRouter} from 'react-router-dom'
import { AuthProvider } from './context/AuthContext.jsx'
import { BannerIdProvider } from './context/BannerIdContext.jsx'
 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvider>
    <BrowserRouter>
    <ThemeContextProvider>
    <ApiProvider> 
      <BannerIdProvider>
    <App />
      </BannerIdProvider>
    </ApiProvider>
    </ThemeContextProvider>
  </BrowserRouter>
  </AuthProvider>
  </React.StrictMode>,
)
