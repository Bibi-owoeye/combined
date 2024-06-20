import React, { useState } from 'react'
import axios from 'axios' 

const ListofStudents = () => {
    let url = "http://localhost:4000/listofstudent"
    const [data, setData] = useState([])
    const getData = ()=>{

        axios.get(url).then((res)=>{
            setData(res.data);
            console.log(res.data);
        }).catch((err)=>{
            console.log(err);
        })
    }
  return (
    <div>
        {data.map((item)=>{
            <div key = {item.id}>
                <p>
                    {item.firstName}
                </p>
                <p>
                    {item.lastName}
                </p>
            </div>
        })
        }
        <button onClick={getData} className='text-white bg-success rounded btn'>Get Students</button>
    </div>
  )
}

export default ListofStudents