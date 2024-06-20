import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const User = () => {
    const navigate= useNavigate()
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    let git = "https://api.github.com/users"
    function fetch() {
        axios.get(git).then((response)=>{
            setData(response.data)
            setIsLoading(true)
            console.log(response.data);
        })
        .catch ((err)=>{
            console.log(err);
        })
    }
    useEffect(() => {
      fetch()
    }, [])
    
    
  return (
    <div>
        {
            !isLoading? <h1>Loading...</h1>     :
            
            <div className='row p-3 shadow m-5 text-center gap-2'>
        <button onClick={fetch} className='d-none'>click</button>
        {
            data.map((item)=>(
                <div key = {item.id} className='col-2 shadow gap-2 p-2 m-2 mx-auto '>
                    <img src={item.avatar_url} alt=""className='w-75 rounded-pill img-fluid' />
                    <p>{item.id}</p>
                    <p>Login: {item.login}</p> 
                    <p>Type: {item.type}</p> 
                    <button onClick={()=>navigate(`/users/user/${item.login}`)} className='btn btn-success'>Check profile</button>
                        </div>
            ))
        }
        </div>
         }
<button onClick={()=>navigate('/')} className='btn w-25 mb-4 btn-success'>Go home</button>
    </div>
  )
}

export default User