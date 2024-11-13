import React from 'react'
import "./Contact.css"
import Navbar from '../../Components/Navbar/Navbar'
import ContactImg from "./contactpic.png"
import Footer from '../../Components/Footer/Footer'

function Contact() {
  return (
    <div>
        <Navbar/>
        <h1 className='page-tilte'> Contact page...!</h1>

        <img src={ContactImg} className='img' />

        <Footer/>
    </div>
  )
}

export default Contact