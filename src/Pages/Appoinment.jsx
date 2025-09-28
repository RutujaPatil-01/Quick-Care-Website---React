import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../Context/AppContext.jsx'
import verifiedicon from '../assets/verified_icon.svg'
import Infoicon from "../assets/info_icon.svg"; 
import './Appoinment.css'
import RelatedDoctors from '../Components/RelatedDoctors.jsx';

const Appoinment = () => {

  const { docId } = useParams()
  const { doctors } = useContext(AppContext)
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

  const [docInfo, setDocInfo] = useState(null)
  const [docSlots, setDocSlots] = useState([])
  const [slotIndex, setSlotIndex] = useState(0)
  const [slotTime, setSlotTime] = useState('')
 

  const fetchDocInfo = async () => {
    const docInfo = doctors.find(doc => doc._id === docId)
    setDocInfo(docInfo) 
  }

  const getAvailableSlots = () => {
    const allDays = [];
    const today = new Date();
  
    for (let i = 0; i < 7; i++) {
      const dayDate = new Date(today);
      dayDate.setDate(today.getDate() + i);
  
      const oneDay = [];
  
      for (let hour = 10; hour < 21; hour++) {
        const slot1 = new Date(dayDate);
        slot1.setHours(hour, 0, 0, 0);
  
        const slot2 = new Date(dayDate);
        slot2.setHours(hour, 30, 0, 0);
  
        oneDay.push({ time: `${hour}:00`, datetime: slot1 });
        oneDay.push({ time: `${hour}:30`, datetime: slot2 });
      }
  
      allDays.push(oneDay);
    }
  
    setDocSlots(allDays);
  };

  useEffect(() => {
    fetchDocInfo()
  }, [doctors, docId])

  useEffect(() => {
    getAvailableSlots()
  }, [docInfo])

  useEffect(() => {
    console.log(docSlots);
  }, [docSlots])

  const handleBooking = () => {
      alert('Thank you for booking the appointment. Please be on time!');
  }

  if (!docInfo) {
    return <div style={{ textAlign: 'center', padding: '2rem' }}>Loading doctor info...</div>
  }

  return (
    <>
      <div className='appoinment-main'> 
        <div className='doc-img'>
          <img src={docInfo.image} alt="" width={200} />
        </div>
        <div className='docInfo-main'>
          <div style={{display:"flex", alignItems:"center", gap:"10px", height:"35px"}}>
            <h2>{docInfo.name} </h2>
            <img src={verifiedicon} alt="" width={15} /> 
          </div>  
          <div style={{display:"flex", gap:"15px", alignItems:"center"}}>
            <p>{docInfo.degree} - {docInfo.speciality}</p>
            <button>{docInfo.experience}</button>
          </div>
          <div>
            <b style={{display:"flex", alignItems:"center", gap:"10px"}}>About <img src={Infoicon} alt="" /></b>
            <p>{docInfo.about}</p>
            <b>Appointment fees: Rs.{docInfo.fees}</b>
          </div>
        </div>
      </div>

      {/* Booking Slots */}
      <div className='bookingSlot'>
        <h2>Booking Slots</h2>
        <div className='slot-day'>
          {docSlots.length > 0 && docSlots.map((daySlots, index) => {
            const firstSlot = daySlots[0];
            if (!firstSlot || !firstSlot.datetime) return null;

            return (
              <div key={`day-${firstSlot.datetime.getTime()}`} className={`slot-days ${slotIndex === index ? 'selected-day' : ''}`} 
                   onClick={() => { 
                     setSlotIndex(index); 
                     handleDateSelection(index); // Handle date selection when clicking on a day
                   }}>
                <p>{daysOfWeek[firstSlot.datetime.getDay()]}</p>
                <p>{firstSlot.datetime.getDate()}</p>
              </div>
            );
          })}
        </div>

        <div className='time-slot'>
          {docSlots.length > 0 && docSlots[slotIndex] && docSlots[slotIndex].map((item, index) => (
            <p key={index}
               className={`time-slot-item ${slotTime === item.time ? 'selected-time' : ''}`}
               onClick={() => setSlotTime(item.time)}>
              {item.time.toLowerCase()}
            </p>
          ))}
        </div>

        <button onClick={handleBooking}>Book an appointment</button>
      </div>

      {/* Related doctors */}
      <RelatedDoctors docId={docId} speciality={docInfo.speciality}/>
    </>
  );
}

export default Appoinment;
