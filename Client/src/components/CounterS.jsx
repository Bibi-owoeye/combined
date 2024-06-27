import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement } from '../Counter/CounterSlice'


const CounterS = () => {
    const count = useSelector((state)=>state.counter.value)
    const dispatch = useDispatch()
    
  return (
    <div>
        <button onClick={()=>dispatch(decrement())}>Decrement</button>
        <p>{count}</p>
        <button onClick={()=>dispatch(increment())}>Increment</button>
    </div>
  )
}

export default CounterS