import React from "react";
import Register from "./components/Register";
import { Routes,Route, Navigate } from "react-router-dom";
import Nav from "./components/Nav";
import Signin from "./components/Signin";
import Home from "./components/Home";
import ListofStudents from "./components/ListofStudents";
import Dashboard from "./components/Dashboard";
import Products from "./components/Products";
import Listofproducts from "./components/Listofproducts";
import Not_found from "./components/Not_found";
import User from "./components/User";
import ShowApi from "./components/ShowApi";
import Mui from "./components/Mui";
import Formik from "./components/Formik";
import CounterS from "./components/CounterS";

const App = () => {
// let  token = "12345";
//   localStorage.setItem("token", token)
  let authToken = localStorage.getItem("token")
  console.log(authToken);
  return (
    <div>
      <Routes>
        <Route path='/' element={<Nav/>}>
        {/* <Route path="/" element={<Home/>}/> */}
        <Route path="/register" element={<Register/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/formik" element={<Formik/>}/>
        <Route path="/counter" element={<CounterS/>}/>
        <Route path="/products" element={<Products/>}>
        <Route path="/products/:product" element={<Listofproducts/>}/>
        </Route>
        </Route>
        <Route path="/dashboard" element={authToken?  <Dashboard/>:<Navigate to="/signin"/>}/>
        <Route path="*" element={<Not_found/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/users" element={<User/>}/>
        <Route path="/mui" element={<Mui/>}/>
        
        <Route path="/users/user/:username" element={<ShowApi/>}/>
        

      </Routes>
      
      {/* <Register/> */}
    </div>
  );
};

export default App;
