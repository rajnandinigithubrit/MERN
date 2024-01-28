import React, { useState, useEffect, useContext, } from 'react'
import { useNavigate } from "react-router-dom";


import '../SignUp/SignUp.css'
function SignUp() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [data, setData] = useState('')
    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate('/')
        }
    }, [])
    const collectData = async () => {
        try {
            const response = await fetch('http://localhost:8080/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password }),
            });

            const data = await response.json();
            localStorage.setItem('user', JSON.stringify(data))
            setData(data)

            console.log(email, password)
            if (data) {
                alert("registration succesfull")
                setEmail('')
                setPassword('')
                // navigate('/login')
            }
            else {
                alert('failed')
            }
            // Handle the response data in your React component
        } catch (error) {
            console.error('Error:', error);
        }
    };



    useEffect(() => {

    }, [])
    return (
        <div className='sign-up'>
            <h1>Register</h1>
            <input className='input-box' value={name} onChange={(e) => setName(e.target.value)} type='text' placeholder='Enter Name' />
            <input className='input-box' value={email} onChange={(e) => setEmail(e.target.value)} type='text' placeholder='Enter Email' />
            <input className='input-box' value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Enter Password' />
            <div className='btn-sign'>
                <button onClick={collectData}>Sign up</button>
            </div>
        </div>
    )
}

export default SignUp
