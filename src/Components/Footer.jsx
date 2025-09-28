import React from 'react'
import Logo from '../assets/Logo.png'
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer-container">
      <div className='main'>
        {/* left */}
        <div className='about'>
          <img src={Logo} alt="" />
          <p>
            Quick Care is your trusted partner in health, providing compassionate, accessible, and quality medical services 24/7. Our mission is to deliver fast and effective care when you need it the most whether it's a routine checkup or an emergency. Backed by experienced doctors, modern facilities, and a patient-first approach, Quick Care ensures your well-being is always our top priority.
          </p>
        </div>

        {/* center */}
        <div className='contact'>
          <p>COMPANY</p>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        {/* right */}
        <div className='contact2'>
          <p>GET IN TOUCH</p>
          <ul>
            <li>+0-000-000-000</li>
            <li>quickCare@gmail.com</li>
          </ul>
        </div>
      </div>

      <div className='copyright'>
        <p>Copyright 2024 @ QuickCare - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
