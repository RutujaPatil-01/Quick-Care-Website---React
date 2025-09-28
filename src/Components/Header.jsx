import React from 'react';
import group from '../assets/group_profiles.png';
import headerimg from '../assets/headimg.png';
import  './Header.css'

const Header = () => {
  return (
    <div className='headermain'>
      <div className="leftside">
        <p>Book Appointment <br /> With Trusted Doctors</p>
        <div className='rightside'>
          <img src={group} alt="Group Profiles" width={112} />
          <p style={{fontSize:"16px",fontWeight:'300'}}>Simply browse through our extensive list of trusted doctors, <br />
            schedule your appointment hassle-free.</p>
        </div>
        <a href="#speciality">Book appointment</a>
      </div>

      <div className="rightside">
        <img src={headerimg} alt="Doctors" />
      </div>
    </div>
  );
}

export default Header;
