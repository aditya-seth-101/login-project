import React from 'react'
import Navbar from './Navbar'
import { useLocation } from 'react-router-dom'
const MainPage = () => {
   const location = useLocation()
   
  return (
    <div>
        <Navbar user ={location.state}/>
    </div>
  )
}

export default MainPage