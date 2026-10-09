import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Register() {

    let [isLoading, setIsLoading] = useState(false);
    let [message,setMessage] = useState({
        type: ``,
        text: ``
    });

    let [user,setUser] = useState({
        id: ``,
        userName: ``,
        userEmail: ``,
        userPassword: ``
    });

    const navigate = useNavigate()

    function handleChange(e){
        setUser({...user, [e.target.name] : e.target.value})

    }

    async function handleSubmit(e){
        e.preventDefault();
        setMessage({type: ``, text: ``})
        try{
            setIsLoading(true);
            let response = await axios.post(`https://fakestoreapi.com/users`, {
                id: user.id,
                username: user.userName,
                email: user.userEmail,
                password: user.userPassword 
            });
            if(response.status === 201 || response.status === 200){
                console.log(`Registeration Success`);
                setIsLoading(false);
                setMessage({type: `success`, text: `Registeration Successful`});
            }
        }catch(error){
            console.error(`Error: ${error}`)
            console.log(`Registeration Failed`);
            setIsLoading(false);
            setMessage({type: `error`, text: `Registeration Failed`});
        }
    }

    return (
        <>
            <div className="container text center bg-primary d-flex-col justify-content-center align-items-center">
                <h2 text-light text-center>Register Form</h2>
                <form onSubmit={handleSubmit}>
                    <input type="number" className='form-control text-center my-3' name='id' id='id' placeholder='Enter Your ID' onChange={handleChange} required />
                    <input type="text" className='form-control text-center my-3' name='userName' id='userName' placeholder='Enter Your Username' onChange={handleChange} required />
                    <input type="email" className='form-control text-center my-3' name='userEmail' id='userEmail' placeholder='Ecample@gmail.com' onChange={handleChange} required />
                    <input type="password" className='form-control text-center my-3' name='userPassword' id='userPassword' placeholder='Enter Your Password' onChange={handleChange} required />
                    <button type='submit' className='btn btn-primary my-2 p-2' disabled={isLoading}>{isLoading ? `Registering...` : `Register`}</button>
                </form>
            </div>
        </>
    )
}

export default Register
