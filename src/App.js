import React from 'react'
import Header from './components/Header'
import './css/App.css'
import { Outlet } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'

export default function App() {
  return (
    <ThemeProvider>
     <Header/>
     <Outlet/>
    </ThemeProvider>
  )
}
