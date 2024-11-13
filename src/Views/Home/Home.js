import React from 'react'
import "./Home.css"
import Navbar from '../../Components/Navbar/Navbar'
import HomeImg from "./home.png"
import Footer from '../../Components/Footer/Footer'

function Home() {
  return (
    <div>
        <Navbar/>
        <h1 className='page-tilte'>Home page...!</h1>

        <img src={HomeImg} className='img'/>

        <Footer/>
    </div>
  )
}

export default Home