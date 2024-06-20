import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let url = "http://localhost:4000/signin";
  // let token = "12345";
const loginHere = ()=>{
  axios
  .post(url, { email, password })
  .then((res) => {
    console.log(res.data);
    console.log("yes");
    localStorage.setItem("token",res.data.token)
    navigate("/dashboard");
  })
  .catch((err) => {
    console.log(err);
  });
}
  return (
    <div className='w-50 mx-auto p-3 shadow mt-5 text-center'>
      <h1 className="text-success">Login Here</h1>
            <div  className=' text-center' >
            <label htmlFor="">Email</label>
            <input type="email"
            className='form-control shadow-none'
            name='email' 
            onChange={(e) => setEmail(e.target.value)}/>
            </div>
          <div className=' text-center mt-3 '>
          <label htmlFor="">Password</label>
            <input type="password" className='form-control shadow-none'
            name='password'
            onChange={(e) => setPassword(e.target.value)} />
          </div>
            <button onClick={loginHere} className='btn btn-secondary d-block mt-3 w-50 mx-auto text-cente' >
              login here
            </button>
        
    </div>
  )
}

export default Signin