import React from 'react'
import { doctors } from '../Doctors'
import '../Components/TopDoctours.css'
import { useNavigate } from 'react-router-dom'

const TopDoctors = () => {
    const navigate=useNavigate()
  return (
    <div className='topDocMain'>
        <h1 style={{fontSize:'30px', fontWeight:'600'}}>Top Doctors to Book</h1>
        <p style={{textAlign:'center',fontSize:'17px'}}>Simply browse through our extensive list of trusted doctors.</p>
        <div className='doctorslist'>
            {
                doctors.slice(0,8).map((item)=>(
                        <div className='doc-Img' onClick={()=>navigate(`/appointment/${item._id}`)}>
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
            <div style={{alignItem:'center'}}>
            <button onClick={()=>{navigate('/doctors');  }}>More</button>
            </div>
    </div>
  )
}

export default TopDoctors