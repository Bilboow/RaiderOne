import React, { useContext, useState } from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import axios from 'axios'
import { UserDataContext } from '../context/UserContext';

const UserSignup = () => {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [userData,setUserData] = useState({});

    const navigate = useNavigate();
    const {user,setUser} = React.useContext(UserDataContext)

    const submitHandler = async (e)=>{
        e.preventDefault();

        const newUser ={
            fullname:{
                firstname:firstName,
                lastname:lastName,
            },
            email:email,
            password:password
        }

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`,newUser);

        if(response.status === 200){
            const data = response.data;

            setUser(data.user)
            localStorage.setItem('token',data.token)

            navigate('/home')
        }
        
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
    }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
        <div>
            <h1 className='text-xl font-bold mb-4'>RaiderOne</h1> 
            <form onSubmit={(e)=>submitHandler(e)}>

                <h3 className='text-lg font-medium mb-2'>What's your Name?</h3>

                <div className='flex gap-4 mb-6'>
                    <input 
                    type="text" 
                    className='bg-[#eeeeee] px-4 py-2 rounded w-1/2 text-lg placeholder:text-base'
                    required 
                    placeholder='First name'
                    value={firstName}
                    onChange={(e)=>setFirstName(e.target.value)}
                    />

                    <input 
                    type="text" 
                    className='bg-[#eeeeee] px-4 py-2 rounded w-1/2 text-lg placeholder:text-base'
                    required 
                    placeholder='Last name'
                    value={lastName}
                    onChange={(e)=>setLastName(e.target.value)}
                    />
                </div>

                <h3 className='text-lg font-medium mb-2'>What's your email</h3>

                <input 
                type="email" 
                className='bg-[#eeeeee] mb-6 px-4 py-2 rounded w-full text-base placeholder:text-base'
                required 
                placeholder='email@example.com'
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />

                <h3 className='text-lg font-medium mb-2'>Enter Password</h3>

                <input 
                type="password"
                className='bg-[#eeeeee] mb-6 px-4 py-2 rounded w-full text-lg placeholder:text-base' 
                required 
                placeholder='password'
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                />

                <button
                className='bg-[#111] text-[#fff] font-semibold mb-3 px-4 py-2 rounded w-full text-lg placeholder:text-base'
                >Create Account</button>

            </form>

            <p className='text-center'>Already have a account? <Link to='/login' className='text-blue-600 '>Login here</Link></p>

        </div>
        <div>
            <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
            Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
        </div>
    </div>
  )
}

export default UserSignup