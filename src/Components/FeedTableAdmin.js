import React from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import { useEffect, useState } from "react";

const FeedTableAdmin = () => {

  const [tableData, setTableData] = useState()
  const [tableMain, setTableMain] = useState()
  
  const navigate = useNavigate();

  const delSubmit = async (e) => {                     //DELETE
     const response = axios.delete('http://127.0.0.1:8083/admin-table', {
        data: { _id: e.target.name }
      })
      
      setTableData(response.data)
    }
  
  
    const editSubmit = (e) => {    
      e.preventDefault()
      navigate('/admin-table-edit',{state:{_id:e.target.name}})
    }


    useEffect(() => {
      axios.post('http://127.0.0.1:8083/admin-table').then(  //GET
        (res) => {
          setTableData(res.data)
        }
      ).catch(err => console.log(err)).then(
        () => {
          let myTable = tableData.map((item, index) => {
            return (<tr key={item._id}><td>{index + 1}</td><td>{item.feedTo}</td><td>{item.feedFrom}</td><td>{item.feedDesc}</td><td>{item.date}</td><td>{item.email}</td><td><input type="button" value="Edit" className="btn btn-warning" name={item._id} onClick={editSubmit} />&emsp;<input type="button" value="Delete" className="btn btn-danger" name={item._id} onClick={delSubmit} /></td>
            </tr>)
  
          })
          setTableMain(myTable)
        }
      ).catch(err => console.log(err))
    }, [tableData])

  return (
    <div className="container-fluid">
    <table className="table table-dark">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Feedback To</th>
          <th scope="col">Feedback From</th>
          <th scope="col">Feedback Description</th>
          <th scope="col">Date</th>
          <th scope="col">Email</th>
          <th scope="col">Edit /Delete</th>

        </tr>
      </thead>
      <tbody>{tableMain}</tbody>
    </table>
    
    
  </div>
  )
}

export default FeedTableAdmin