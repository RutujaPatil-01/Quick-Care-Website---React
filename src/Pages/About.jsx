import React from 'react';
import AboutImg from '../assets/about.jpg';
import './About.css'

const About = () => {
  return (
    <div className='main-div'>
      <div className='aboutHead'>
        <p>ABOUT <span style={{color: '#374151',fontWeight: '600' }}>US</span></p>
      </div>

      <div className='about-box'>
        <img src={AboutImg} alt="About Us" style={{width:'400px',height:'460px'}} />
       
        <div className='para-div'>
          <p>Welcome to Quick Care, your trusted partner in managing your healthcare needs conveniently and efficiently. At Quick Care, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.</p>

          <p>Quick Care is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Quick Care is here to support you every step of the way.</p>

          <b>Our Vision</b>

          <p>Our vision at Quick Care is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>

        </div>
      </div>
      <div>
        <p style={{fontSize:'28px'}}>WHY <span style={{color:'#374151',fontWeight: '800'}}>CHOOSE US</span></p>
      </div>
      <div className='choose-main'>
        <div className='choose-div'>
          <b>EFFICIENCY</b>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>
        <div className='choose-div'>
        <b>CONVENIENCE</b>
        <p>Access to a network of trusted healthcare professionals in your area.</p>
        </div>
        <div className='choose-div'>
        <b>PERSONALIZATION</b>
        <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
