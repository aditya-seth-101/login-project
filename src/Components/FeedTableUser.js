import React from 'react'
import { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
const FeedTable = (props) => {
  const [tableData, setTableData] = useState()

  const navigate = useNavigate();
  const editSubmit = (e) => {
    e.preventDefault()
    navigate('/edit-user', { state: { _id: e.target.name } })
  }
  const tableRender = async () => {
    let res = await axios.post('http://127.0.0.1:8083/user-table', { email: props.user.email })
    let myTable = await res.data.map((item, index) => {
      return (<tr key={item._id}><td>{index + 1}</td><td>{item.feedTo}</td><td>{item.feedDesc}</td><td>{item.date}</td><td>{item.adminFeedB}</td><td><input type="button" value="Edit" className="btn btn-warning" onClick={editSubmit} name={item._id} /></td>
      </tr>)
    })
    setTableData(myTable)
  }
  useEffect(() => {
    tableRender()
  }, [])

  return (
    <div className="container-fluid">
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Feedback to</th>
            <th scope="col">Feedback Description</th>
            <th scope="col">Date</th>
            <th scope="col">Admin Feedback</th>
            <th scope="col">Edit </th>
          </tr>
        </thead>
        <tbody>{tableData}</tbody>
      </table>
    </div>
  )
}

export default FeedTable