import React from 'react'
import FrontHeader from './FrontHeader.js'
import Login from './Login.js'
import Register from './Register.js'
const FrontPage = (props) => {
 
  return (  
    <div>
    <FrontHeader />
    <Login  />
    <Register/>
    </div>
  ) 
}

export default FrontPage    