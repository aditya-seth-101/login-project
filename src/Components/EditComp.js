import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useLocation,useNavigate } from 'react-router-dom';
const EditComp = () => {
    const navigate =useNavigate()
    const [feedTo,setFeedTo] = useState('')
    const [date,setDate] = useState('')
    const [feedDesc,setFeedDesc] =useState('')  
    let location = useLocation()
    console.log(location.state._id)
    const [resFeed,setResFeed]=useState({})
    useEffect(()=>{
        axios.post(`http://127.0.0.1:8083/edit-user/${location.state._id}`).then(res=>{
            setResFeed(res.data)
        })
    },[])

    const handelChange = (e)=>{
        let currentDate  = new  Date()
        setDate(currentDate)
          switch (e.target.id) {
           case "feedTo":
              setFeedTo(e.target.value)
             break;
           case "feedDesc":
              setFeedDesc(e.target.value)
             break;
          
           default:
             break;
          }
         }


    const feedSubmit =async (e)=>{
        e.preventDefault()
          let response = await axios.put(`http://127.0.0.1:8083/edit-user/${location.state._id}`,{
          feedTo:feedTo,
          date:date,
          feedDesc:feedDesc
        })
        navigate('/user-panel',{state:response.data})
       }

  return (
    <div>
        <form >
            <h3>Edit feedback to</h3>
            <input type="text" placeholder='Feedback To' id='feedTo' defaultValue={resFeed.feedTo} onChange={handelChange}/> <br />
            <h3>Edit feedback description</h3>
            <textarea name="" id="feedDesc" cols="30" rows="10" defaultValue={resFeed.feedDesc} onChange={handelChange}></textarea> <br />
            <button onClick={feedSubmit}>Submit</button>
        </form>
    </div>
  )
}

export default EditComp