import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';
import axios from 'axios';

const CaptainLogin = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    
    const navigate = useNavigate();
    const {captain,setCaptain} = React.useContext(CaptainDataContext)

    const submitHandler = async (e)=>{
        e.preventDefault();

        const captainData = {
            email:email,
            password:password
        }

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`,captainData)

        if(response.status === 200){
            const data = response.data;
            setCaptain(data.captain);
            localStorage.setItem('token',data.token);
            navigate('/captain-home')
        }

        setEmail('');
        setPassword('');
    }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
        <div>
            <h1 className='text-xl font-bold mb-4'>RaiderOne</h1> 
            <form onSubmit={(e)=>submitHandler(e)}>
                <h3 className='text-lg font-medium mb-2'>What's your email</h3>
                <input 
                type="email" 
                className='bg-[#eeeeee] mb-7 px-4 py-2 rounded w-full text-lg placeholder:text-base'
                required 
                value={email}
                onChange={(e)=>setEmail(e.target.value)} 
                placeholder='email@example.com'/>

                <h3 className='text-lg font-medium mb-2'>Enter Password</h3>

                <input 
                type="password"
                className='bg-[#eeeeee] mb-7 px-4 py-2 rounded w-full text-lg placeholder:text-base' 
                required 
                value={password}
                onChange={(e)=>setPassword(e.target.value)} 
                placeholder='password'/>

                <button
                className='bg-[#111] text-[#fff] font-semibold mb-3 px-4 py-2 rounded w-full text-lg placeholder:text-base'
                >Login</button>

            </form>

            <p className='text-center'>Join a fleet? <Link to='/captain-signup' className='text-blue-600 '>Register as a Captain</Link></p>

        </div>
        <div>
            <Link to='/login'
            className='bg-[#d5622d] text-[#fff] flex items-center justify-center font-semibold mb-5 px-4 py-2 rounded w-full text-lg placeholder:text-base'
            >Sign in as User</Link>
        </div>
    </div>
  )
}

export default CaptainLogin