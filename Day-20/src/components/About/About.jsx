import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../../context/AppContext'

function About() {
    let {counter, increment} =useContext(AppContext)
    return (
        <>
            <div className='container-fluid d-flex justify-content-center align-items-center vh-100 w-100 bg-primary'>
                <div className=' w-50 bg-white p-4 text-center rounded shadow'>
                    <h1 className='text-dark text-center'>About My Store</h1>
                    <h3 className='text-dark text-center' onClick={increment}>Counter: {counter}</h3>

                </div>
            </div>
        </>
    )
}

export default About
