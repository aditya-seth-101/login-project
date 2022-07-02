import React, { useState } from 'react'
import '../CSS/Register.css'
const Register = () => {
  const [nme,setNme] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [fetchRes,setFetchRes] =useState('')

  const handelChange = (e)=>{
   switch (e.target.id) {
    case "nme":
      setNme(e.target.value)
      break;
   
    case "email":
      setEmail(e.target.value)
      break;
    case "pswd":
      setPassword(e.target.value)
      break;
   
    default:
      break;
   }
  }
  const regSubmit = (e)=>{
    e.preventDefault()
    let data ={'name':`${nme}`,'email':`${email}`,'password':`${password}`}
    fetch('http://127.0.0.1:8083/register',{
      method:'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
       
      },
      body: JSON.stringify(data)
    }).then(response =>{
      console.log(response )
     return response.json()
    }).then(data =>{
      setFetchRes(data )
    })
  }


  return (
    <div className='register'>
      <h1>Register</h1>
      <form onSubmit={regSubmit}>
        <input type="text" placeholder='Enter Name' id='nme' onChange={handelChange}/> <br />
        <input type="text" placeholder='Enter Email' id='email' onChange={handelChange}/> <br />
        <input type="password" placeholder='Create Password' id='pswd'onChange={handelChange} /> <br />
        <input type="submit" />
      </form>
      <div>{fetchRes}</div>
    </div>
  )
}

export default Register