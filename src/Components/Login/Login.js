import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Login(props) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    useEffect(()=>{
        const auth = localStorage.getItem('user')
        if(auth){
            navigate('/')
        }
    })
    const collectData = async () => {

        const Response = await fetch('http://localhost:8080/login', {
            method: 'post',

            body: JSON.stringify({ email, password }),
            headers: {
                'Content-type': 'application/json'
            }
        })
        const data = await Response.json();
        console.log(data)
        if (data.name) {
            alert('successfullLogin')
            localStorage.setItem('user', JSON.stringify(data))

            setEmail('');
            setPassword('');
            navigate('/')
        }
        else {
            alert('Please Enter Correct details')
        }

    }


    return (
        <div className='sign-up'>
            <h1>Login</h1>
            {/* <input className='input-box' value={name} onChange={(e) => setName(e.target.value)} type='text' placeholder='Enter Name' /> */}
            <input className='input-box' value={email} onChange={(e) => setEmail(e.target.value)} type='text' placeholder='Enter Email' />
            <input className='input-box' value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Enter Password' />
            <div className='btn-sign'>
                <button onClick={collectData}>Sign up</button>
            </div>
        </div>
    )
}

export default Login
