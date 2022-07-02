import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";


const Login = () => {
    const [password,setPassword] = useState('')
    const [email,setEmail] = useState('')
    const [logres,setLogRes] = useState('')
    const navigate = useNavigate()
  
    
    const loginSubmit =async (e)=>{
      e.preventDefault()
      try {
        let response = await  axios.post('http://127.0.0.1:8083/login',{email:email,password:password})
       
        setLogRes(response.data)
        if (response.data.message==='Login Successful') {
          setLogRes(response.data.message)
          
          navigate('/main-page',{state:response.data.user})

        }
    
      } catch (error) {
        console.log(error)
        setLogRes()
      }
    }
  
    const handelChange = (e)=>{
      switch (e.target.id) {
       case "loginEmail":
         setEmail(e.target.value)
         break;
       case "loginPswd":
         setPassword(e.target.value)
         break;
      
       default:
         break;
      }
     }
  return (
    
   
      <div className='login'>
      <h1>Login</h1>
      <form action="">
        <input type="text" placeholder='Email' id='loginEmail'  onChange={handelChange}/> <br />
        <input type="password" placeholder='Password' id='loginPswd' onChange={handelChange}/> <br />
        <input type="submit" onClick={loginSubmit}/>
      </form>
      <div>{logres}</div>
    </div>
    
  )
}

export default Login