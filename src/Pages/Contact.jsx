import React from 'react'
import './Contact.css'
import contactImg from '../assets/contact_image.png'
const Contact = () => {
  return (
    <div className='main-cont'>
      <div className='conthead'>
        <p>CONTACT <span style={{ color: '#374151', fontWeight: '600' }}> US</span> </p>
      </div>

      <div className='about-box'>
        <img src={contactImg} alt="" width={400} height={400} />

        <div className='cont-para'>
          <p style={{ fontWeight: '600', fontSize: '18px' }}>OUR OFFICE</p>
          <p>Laxmipuri near Dasara Chowk, Kolhapur, Maharashtra  </p>
          <p>Tel: (000) 000-0000</p>
          <p>quickCare@gmail.com</p>
          <p style={{ fontWeight: '600', fontSize: '18px' }}>CAREERS AT Quick care</p>
          <p>Learn more about our teams and job openings.</p>
          <button>Explore Jobs</button>
        </div>
      </div>
    </div>
  )
}

export default Contact