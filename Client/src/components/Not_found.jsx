import React from 'react'
import { useNavigate } from 'react-router-dom'

const Not_found = () => {
     const navigate = useNavigate()

  return (
    <div className='mx-auto d-block text-center mt-5'>
        <h1 className='fs-5 text-danger '>This is not the page you're looking for</h1>
        <p className='fs-1 text-primary'>error 404</p>
        <button onClick={()=>navigate('/')} className='btn btn-primary'>Go back to home page</button>
    </div>
  )
}

export default Not_found