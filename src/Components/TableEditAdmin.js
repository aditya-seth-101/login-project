import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const TableEditAdmin = () => {
    const [defaultVal,setdefaultVal] = useState('')
    const location = useLocation()
    const navigate = useNavigate()
    const [feedDesc, setFeedDesc] = useState('')
    const [adminFeed, setAdminFeed] = useState('')
    const feedSubmit = async (e) => {
        e.preventDefault()
        await axios.put(`http://127.0.0.1:8083/admin-table-edit/${location.state._id}`, {
            feedDesc: feedDesc,
            adminFeedB: adminFeed
        }).then(res => {
            navigate('/admin-panel', { state: res.data })
        })
    }

    const handelChange = (e) => {
        switch (e.target.id) {
            case "feedDesc":
                setFeedDesc(e.target.value)
                break;
            case "adminFeed":
                setAdminFeed(e.target.value)
                break;
            default:
                break;
        }
    }
    useEffect(()=>{
        axios.post(`http://127.0.0.1:8083/admin-table-edit/${location.state._id}`).then(res=>{
             setdefaultVal(res.data.feedDesc)
        })
    },[])
    return (
        <div>
            <label htmlFor="">
                Edit User feedback  <textarea name="" id="feedDesc" cols="30" rows="10" defaultValue={defaultVal} onChange={handelChange}></textarea> <br />
            </label>
            <label htmlFor="">
                Admin feedback  <textarea name="" id="adminFeed" cols="30" rows="10" defaultValue={"Will update soon"} onChange={handelChange}></textarea> <br />
            </label>
            <button onClick={feedSubmit}>Submit</button>
        </div>
    )
}

export default TableEditAdmin