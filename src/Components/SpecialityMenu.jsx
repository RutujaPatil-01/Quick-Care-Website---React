import React from 'react'
import {specialityData} from '../Doctors.js'
import { Link } from 'react-router-dom'
import './SpecialityMenu.css'

const SpecialityMenu = () => {
  return (
    <div className='specialitymain' id='speciality'>
        <h1 style={{fontSize: "30px", fontWeight: "600" }}>Find by Speciality</h1>
        <p style={{ width: "30%", textAlign: "center", fontSize: "15px" ,marginTop: "0"}}>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
       
        <div className='specialMenu'>    
            {specialityData.map((item,index)=>(
               <Link onClick={()=>scrollTo(0,0)} key={index} to={`/doctors/${item.speciality}`}>
                    <img src={item.image} alt="" style={{width:"66px", marginBottom:"8px"}} />
                    <p>{item.speciality}</p>
              </Link>
            ))}
        </div>
    </div>
  )
}

export default SpecialityMenu