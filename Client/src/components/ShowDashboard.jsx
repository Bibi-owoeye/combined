import React from 'react'

const ShowDashboard = ({data}) => {
  return (
    <div>
        {
        data.map((item , index)=>(
          <div key={index}>
          <p>{item.firstName}</p>
          <p>{item.lastName}</p>
          </div>
        ))
      }
    </div>
  )
}

export default ShowDashboard