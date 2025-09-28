import React from 'react'
import Logo from '../assets/Logo.png'
import { Link, useNavigate } from 'react-router-dom'
import   './Nav.css'
const Navbar = () => {
     let nav=useNavigate()

  return (
    <div className='navmain'>
       <img src={Logo} alt="" onClick={()=>nav('/')}/>
        <div className="h-menu">
          <ul className="nav-links">
             <li>
                  <Link to="/home"  >Home</Link>
             </li>

             <li> 
                  <Link to="/doctors">All Doctors</Link>
             </li>

             <li>
                  <Link to="/about">About</Link>
             </li>

             <li>
                  <Link to="/contact">Contact</Link>
             </li>
       </ul>
       </div>  
       <div className='create-account'>
        <button onClick={()=>{ nav('/login')}}>create account</button>
       </div>
    </div>
  )
}

export default Navbar