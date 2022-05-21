import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

const Dashboard = () => {
    const [jobs, setJobs] = useState([])
    const [refresh, setRefresh] = useState(true)

    useEffect(() => {
        axios.get(`http://localhost:8000/api/jobs`)
        .then(response => {
            setJobs(response.data)
        })
        .catch(err => console.log(err))
    },[refresh])

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8000/api/jobs/${id}`)
        .then(response => console.log(response))
        reload()
        .catch(err => console.log(err)) 
    }
    const reload = () => {
        setRefresh(!refresh)
    }

  return (
    <div>
        <Link to={"/jobs/new"}>Add a job</Link>
        <table>
            <thead>
                <tr>
                    <th>Job Title</th>
                    <th>Company</th>
                    <th>Salary</th>
                    <th>Remote</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    jobs.map((job,i) => (
                <tr key={i}>
                    <td>{job.title}</td>
                    <td>{job.company}</td>
                    <td>{job.salary}</td>
                    <td>{job.remote ? "Yes":"No"}</td>
                    <td><Link to={`/jobs/edit/${job._id}`}>Edit</Link> || <button type="submit" onClick={() => handleDelete(job._id)}> Delete</button></td>
                </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default Dashboard