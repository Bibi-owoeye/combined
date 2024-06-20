import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ShowApi = () => {
    const navigate = useNavigate();
    const {username}=useParams()
    const url = `https://api.github.com/users/${username}`
    const [data, setData] = useState([])
    const [isloading, setIsLoading] = useState(false)
    useEffect(() => {
    axios.get(url).then((response)=>{
        setData(response.data)
        console.log(response.data)
        setIsLoading(true)
    }).catch((err)=>{
        console.log(err);
    })
    
    }, [])
    
  return (
    
   <div>
    {!isloading? <h1>Loading...</h1>: <div className='row gap-2 w-75 shadow p-5 m-5 d-block mx-auto text-center'>
        <button onClick={()=>navigate('/')} className='btn w-25 mb-4 btn-success'>Go home</button>
            <div className=' col shadow w-50 mx-auto p-4 '>
        <img src={data.avatar_url} className='w-50 rounded-pill img-fluid' alt="" />
        <p className='fs-4'>Name:{data.login}</p>
        <p className='fs-4'>Type:{data.type}</p>
        
    </div>
        
       
    </div>}
   </div>
  )
}

export default ShowApi