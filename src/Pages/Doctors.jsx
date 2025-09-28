import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
// import { doctors } from '../Doctors'
import { AppContext } from '../Context/AppContext'
import './Doctors.css'
const Doctors = () => {
  const {speciality} = useParams()
  const [filterDoc, setFilterDoc]=useState([])
  const {doctors}= useContext(AppContext)

  const navigate=useNavigate()

  const applyFilter=()=>{
    if(speciality){
      setFilterDoc(doctors.filter(doct=>doct.speciality===speciality))
    }
    else{
      setFilterDoc(doctors)
    }
  }

  useEffect (()=>{
      applyFilter( )
  },[doctors,speciality])
  return (
    <div className='maindoc'>
      <p className='docPara'>Browse through the doctors specialist.</p>
      <div className='docMain'>
        <div className='special'>
          <p onClick={()=> speciality ==='General physician' ? navigate('/doctors') : navigate('/doctors/General physician') }>General physician</p>
          <p onClick={()=> speciality ==='Gynecologist' ? navigate('/doctors') : navigate('/doctors/Gynecologist') }>Gynecologist</p>
          <p onClick={()=> speciality ==='Dermatologist' ? navigate('/doctors') : navigate('/doctors/Dermatologist') }>Dermatologist</p>
          <p onClick={()=> speciality ==='Pediatricians' ? navigate('/doctors') : navigate('/doctors/Pediatricians') }>Pediatricians</p>
          <p onClick={()=> speciality ==='Neurologist' ? navigate('/doctors') : navigate('/doctors/Neurologist') }>Neurologist</p>
          <p onClick={()=> speciality ==='Gastroenterologist' ? navigate('/doctors') : navigate('/doctors/Gastroenterologist') }>Gastroenterologist</p>
        </div>
        <div className='doctors-list'>
          {
            filterDoc.map((item)=>(
              <div className='doc-card' key={item._id} onClick={()=>navigate(`/appointment/${item._id}`)}>
                  <img src={item.image} alt=""  />
                  <div className="discription">
                     <div className="paraStyle">
                          <span className="circle"></span>
                         <p style={{ color: "green" }}>Available</p>
                     </div>
                     <div className="textContainer">
                         <p style={{ color: "#262626" }}>{item.name}</p>
                         <p style={{ color: "#5C5C5C" }}>{item.speciality}</p>
                     </div>
                  </div> 
              </div>
      ))
          }
        </div>
      </div>
    </div>
  )
}

export default Doctors