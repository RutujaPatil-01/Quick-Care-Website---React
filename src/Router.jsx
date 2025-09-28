import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Doctors from './Pages/Doctors'
import Login from './Pages/Login'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Appoinment from './Pages/Appoinment'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import SignUp from './Pages/SignUp'

const Router = () => {
  return (
    <div>
      
        <BrowserRouter>
        <Navbar/>
            <Routes>
                <Route path="/" element={<Home />} /> 
                <Route path='/home' element={<Home/>}/>
                <Route path='/doctors' element={<Doctors />}/>
                <Route path='/doctors/:speciality' element={< Doctors/>}/>
                <Route path='/login' element={<Login />}/>
                <Route path='/about' element={<About />}/>
                <Route path='/contact' element={<Contact />}/>
                <Route path='/appointment/:docId' element={<Appoinment />}/>
                <Route path='/SignUp' element={<SignUp/>}/>
                <Route path='/login' element={<Login/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    </div>
  )
}

export default Router