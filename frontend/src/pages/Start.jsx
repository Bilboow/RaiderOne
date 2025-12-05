import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div>
        <div className='h-screen pt-8 flex justify-between flex-col w-full bg-[url(https://i.pinimg.com/736x/2f/06/e1/2f06e153105b279f9e457fe677bd3525.jpg)]'>
            <h1 className='text-5xl pl-9 font-bold '>RaiderOne</h1>
            <div className='bg-white pd-7 py-5 px-5'>
                <h2 className='text-2xl font-bold'>Get Started with RaiderOne</h2>
                <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-4'>Continue</Link>
            </div>
        </div>
    </div>
  )
}

export default Start