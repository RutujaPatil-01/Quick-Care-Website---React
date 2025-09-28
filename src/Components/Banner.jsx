import React from 'react'
import appoinment from '../assets/appointment_img.png'
import './Banner.css'
import { useNavigate } from 'react-router-dom'

const Banner = () => {
  const navigate=useNavigate()
  return (
    <>
        <div className="maindiv">
            <div className="left">
                <span className='paragraph'>
                    <p>Book Appointment</p><p>With 100+ Trusted Doctors</p>
                </span>
                <button onClick={()=>navigate('/login')}>Create Account</button>
            </div>
            <div className="right">
                    <img src={appoinment} alt="" />
            </div>
        </div>
    </>
  )
}

export default Banner