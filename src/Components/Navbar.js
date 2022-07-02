import {Link} from 'react-router-dom'
import React from 'react'

const Navbar = (props) => {
    let user = props.user
   
  return (
    <div className="container-fluid">
       <nav className="navbar navbar-dark bg-dark">
        <Link className='navbar-dark links' to="/user-panel" state={user} >User</Link>
        <Link className='navbar-dark links' to="/admin-panel" state={user} >Admin</Link>
        </nav>
    </div>
  )
}

export default Navbar