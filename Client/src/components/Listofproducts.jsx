import React from 'react'
import { useParams } from 'react-router-dom'

const Listofproducts = () => {
  const {product} = useParams()
  
  console.log(product);
  return (
    <div>
        <h1>
            Product1 {product}
        </h1>

    </div>
  )
}

export default Listofproducts