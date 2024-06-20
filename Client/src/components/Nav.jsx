import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Nav = () => {
   const  navLink = [
    {
        id : "1",
        name: "Home",
        path: "/home"
    },
    {
        id : "2",
        name: "Pricing",
        path: "/pricing"
    },
    {
        id : "3",
        name: "User",
        path: "/users"
    },
   
    {
        id : "4",
        name: "Dashboard",
        path: "/dashboard"
    }
   ]
   const nav2 = [
    {
        id : "1",
        name: "Register",
        path: "/register"
    },
    {
        id : "2",
        name: "SignIn",
        path: "/signin"
    },
   ]
  return (
    <div>
        <ul className='d-flex justify-content-between  bg-success p-3 px-5 '>
           <div className='d-flex gap-5'>
           {navLink.map((link)=>(
                <li key={link.id} >
                    <Link to={link.path} className='Link'>{link.name}</Link>
                </li>
            ))
            }
           </div>
           
            
            <div className='d-flex gap-4 lol'>
            {nav2.map((link)=>(
                <li key={link.id} >
                    <Link to={link.path} className='Link1 rounded'>{link.name}</Link>
                </li>
            ))
            }
                {/* <Link to='/signin' className='Link1 rounded'>Signin</Link>
                <Link to='/register' className='Link1 rounded'>Register</Link> */}
            </div>
        </ul>

        <Outlet/>
    </div>
  )
}

export default Nav