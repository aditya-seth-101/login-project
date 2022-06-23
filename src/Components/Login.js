import React from 'react'
import '../CSS/Login.css'
const Login = () => {
  return (
    <div className='login'>
      <h1>Login</h1>
      <form action="">
        <input type="text" placeholder='Email'/> <br />
        <input type="password" placeholder='Password'/> <br />
        <input type="submit" />
      </form>
    </div>
  )
}

export default Login