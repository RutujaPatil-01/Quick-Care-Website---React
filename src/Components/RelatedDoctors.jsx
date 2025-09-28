import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../Context/AppContext'
import { useNavigate } from 'react-router-dom'
import './RelatedDoc.css'

const RelatedDoctors = ({docId,speciality}) => {
    const {doctors} =useContext(AppContext)
   
    const navigate= useNavigate( )

    const [relDoc, setRelDoc]=useState([])

    useEffect(()=>{

        if(doctors.length>0 && speciality){
            const doctorsData=doctors.filter((doc)=> doc.speciality=== speciality && doc._id !== docId)
            setRelDoc(doctorsData)
        }

    },[doctors,speciality,docId])

  return  (
    <div>
        <div className='RelDocMain'>
                <h1 style={{fontSize:'30px', fontWeight:'600'}}>Related Doctors</h1>
                <p style={{textAlign:'center',fontSize:'17px'}}>Simply browse through our extensive list of trusted doctors.</p>
                <div className='doctorslist'>
                    {
                        relDoc.slice(0,5).map((item)=>(
                                <div className='docImg' onClick={()=>{navigate(`/appointment/${item._id}`); scrollTo(0,0)}}>
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

export default RelatedDoctors