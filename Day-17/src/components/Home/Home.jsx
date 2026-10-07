import { useState } from 'react'
import Navbar from'../Navbar/Navbar'
import About from'../About/About'
import Footer from'../Footer/Footer'
import Parent from '../Parent/Parent'

function Home(){

    return(
        <>
            <Navbar />
            <h1 className='text-center bg-primary p-5 m-0'>Welcome to My Website</h1>
            <About />
            <Parent />
            <Footer />
        </>
    )
}

export default Home