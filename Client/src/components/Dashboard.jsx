import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ShowDashboard from './ShowDashboard';
import { Link, useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate()
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  function getData(){
    axios.get('http://localhost:4000/dashboard')
    .then((res)=>{
      setData(res.data.data)
      setIsLoading(true)
      console.log(res.data);
    })
  }
   const token = localStorage.getItem("token")
  //  console.log(token);
  useEffect(() => {
   getData()
  axios.get('http://localhost:4000/verifyUser', {
    headers: {
      Authorization: `Bearers ${token}`,
     "Content-Type": "Aplication/json" ,
      Accept: "Application/json"
    }
  }).then((res)=>{
    console.log(res.data);
    if(!res.data.status){
      localStorage.removeItem("token")
      navigate('/signin')
    }
  })
  }, [])
  
  return (
    <div>
      
      <div className='dashnav '>
   <ul >
         <div className='d-flex gap-5'>
         <li><Link to ='/' className='dashlink'>go to Home</Link></li>
         <li><Link to ='/check' className='dashlink'>Check Products here</Link></li>
         </div>
         <div className='d-flex gap-5'>
         <li><Link to ='/' className='dashlink'>About</Link></li>
         <li><Link to ='/' className='dashlink'>Contact us</Link></li>
         <li><Link to ='/' className='dashlink'>Log Out</Link></li>
         </div>
   </ul>
      </div>

      <button className='d-none' onClick={getData}>get data</button>
      
      <div>
      {!isLoading? <div className="spinner">
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
</div>:
        <ShowDashboard data={data}/>
      }
      </div>
      </div>
  )
}

export default Dashboard