import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useNavigate, useParams } from 'react-router-dom'


const Update = () => {
    const [title, setTitle] = useState("")
    const [company, setCompany] = useState("")
    const [salary, setSalary] = useState("")
    const [errors, setErrors] = useState([])
    const [remote, setRemote] = useState(false)
    const navigate = useNavigate()
    const {id} = useParams()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/jobs/${id}`)
        .then(response => {
            const job = response.data
            setTitle(job.title)
            setCompany(job.company)
            setSalary(job.salary)
            setRemote(job.remote)
        })
        .catch(err => console.log(err))
    },[id])

    const handleSumbit = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/jobs/${id}`, {title, company, salary, remote})
        .then(response => navigate("/"))
        .catch(err=>{
            const errArr =[]
            const errResData = err.response.data.errors
            console.log(errResData)
            for(const key in errResData){
                errArr.push(errResData[key]["message"])
            }
            setErrors(errArr)
        })
}   

  return (
    <div>
        <form onSubmit={handleSumbit}>
            <label>Title</label>
            <input 
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)} />
            <label>Company</label>
            <input 
            type="text"
            name="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)} />
            <label>Salary</label>
            <input 
            type="text"
            name="salary"
            value={salary}
            onChange={(e) => setSalary(e.target.value)} />
            <label>Remote</label>
            <input 
            type="checkbox"
            name="remote"
            checked={remote}
            value={remote}
            onChange={(e) => setRemote(e.target.checked)} />
            <button type='submit'>Create</button>
        </form>
        <Link to={"/"}>Home</Link>
        {
                errors.map((err, i)=>(
                    <p key={i} style={{color: "red"}}> {err} </p>
                ))
            }

    </div>
  )
}

export default Update