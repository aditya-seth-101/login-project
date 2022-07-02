import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FeedbackForm = (props) => {
  
    const [feedTo,setFeedTo] = useState('')
    const [feedFrom,setFeedFrom] = useState('')
    const [date,setDate] = useState('')
    const [feedDesc,setFeedDesc] =useState('')  
    const [submitResponse,setSubmitResponse] =useState('')  

    const navigate = useNavigate()

  
    const handelChange = (e)=>{
      setFeedFrom(props.user.name)
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
         await axios.post('http://127.0.0.1:8083/feedback-form',{
          feedFrom:feedFrom,
          feedTo:feedTo,
          date:date,
          feedDesc:feedDesc,
          adminFeedB:"Will be updated",
          email:props.user.email
        },{
          headers:{'Content-Type': 'application/json',
        'auth-token':props.token}
        }).then(res=>{
          setSubmitResponse(res.data)
          navigate('/main-page',{state:props.user})
        }).catch(err=>{
          setSubmitResponse(err.response.data)
        })
       }

  return (
    <div className='feedForm'>
      <h1>Give Feedback</h1>
        <form >
          <h3>Feedback To</h3>
            <input type="text" placeholder='Feedback To' id='feedTo'  onChange={handelChange}/> <br />
            <h3>Feedback Discription</h3>
            <textarea name="" id="feedDesc" cols="30" rows="10" onChange={handelChange}></textarea> <br />
            <button onClick={feedSubmit}>Submit</button>
        </form> <br />
        <div className="feedSubRes">
          {submitResponse}
        </div>
    </div>
  )
}

export default FeedbackForm