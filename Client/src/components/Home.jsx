import React, { useEffect, useState } from 'react'
import Logo from "../assets/react.svg"
import axios from 'axios'


const Home = () => {
  useEffect(() => {
   getData()
  },[] )
  
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  let url = 'https://api.github.com/search/repositories?q=XXX'
  const getData =()=>{
    axios.get(url).then((res)=>{
      console.log(res.data);
      setData(res.data.items)
      setIsLoading(true)
    })
    .catch((err)=>{
    console.log(err);
    })
  }
  return (
    <div>
      <button onClick={getData} className='d-none'>get data</button>
      <div className='row d-flex m-5 gap-1 shadow p-5'>
      {
        !isLoading? <h1>Loading...</h1>:
        data.map((item)=>(
        <div key={item.id} className='col-3 shadow mx-auto my-4 p-4 text-center'>
          <p>{item.name}</p>
          <p>{item.owner.login}</p>
          <img src={item.owner.avatar_url}className='w-50 img-fluid' alt="" />
        </div>
        ))
      }
      </div>
    </div>
  )
}

export default Home