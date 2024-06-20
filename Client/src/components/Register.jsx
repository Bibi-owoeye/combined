import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");
  let url = "http://localhost:4000/register";
  
  const getData = () => {
    console.log(firstName, lastName, email, password, number);
    axios
      .post(url, { firstName, lastName, email, password, number })
      .then((res) => {
        console.log(res.data);
        navigate("/signin");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div className="shadow w-50 mx-auto p-4 mt-2 rounded-start text-center">
      <h1 className="text-info">Register Here</h1>
        <div>
          <label htmlFor="">First Name</label>
          <input
            type="text"
            className="form-control shadow-none"
            name="firstName"
            placeholder="enter firstname here"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Last Name</label>
          <input
            type="text"
            className="form-control shadow-none"
            name="lastName"
            placeholder="enter lastname here"
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input
            type="email"
            name="email"
            className="form-control shadow-none"
            placeholder="enter email here"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">password</label>
          <input
            type="password"
            name="password"
            className="form-control shadow-none"
            placeholder="enter password here"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">number</label>
          <input
            type="number"
            className="form-control shadow-none"
            name="number"
            placeholder="enter number here"
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
        <button onClick={getData} className="btn btn-success mt-3 w-50">click here</button>
      </div>
    </div>
  );
};

export default Register;
