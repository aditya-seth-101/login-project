import React from 'react'
import FeedbackForm from './FeedbackForm'
import FeedTableUser from './FeedTableUser'
import Navbar from './Navbar'
import { useLocation } from 'react-router-dom'
const UserPanel = () => {
  const location = useLocation()
  const isAdmin = location.state.isAdmin
  return (
    <div>
        <Navbar user={location.state}/>
        {isAdmin ? <h1>Cannot access user panel as admin</h1> : <><FeedbackForm user={location.state}/>
        <FeedTableUser user={location.state}/></>}
        
    </div>
  )
}

export default UserPanel