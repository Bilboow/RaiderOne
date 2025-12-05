import React, { useContext } from 'react'
import { CaptainDataContext } from '../context/CaptainContext'

const CaptainDetails = () => {
    const {captain} = useContext(CaptainDataContext)
  return (
    <div>
        <div className='flex items-center justify-between bg-green-300 rounded-xl p-3 '>
            <div className='flex items-center justify-start gap-3'>
                <img className='h-15 w-15 object-cover rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3kprXSmAqpSeDBVP9vmHZpvCbB_WNcxn8Eg&s" alt="person" />
                <h4 className='text-lg font-medium'>{captain.fullname.firstname+" "+captain.fullname.lastname}</h4>
            </div>
            <div>
                <h4 className='text-xl font-semibold'>₹259</h4>
                <p className='text-sm text-gray-600'>Earned</p>
            </div>
        </div>  
        <div className='flex p-3 mt-6 bg-gray-100 rounded-full justify-center gap-5 items-start'>
            <div className='text-center'>
                <i className="text-3xl mb-2 font-thin ri-timer-2-line"></i>
                <h5 className='text-lg font-medium'>10.2</h5>
                <p className='text-sm text-gray-600'>Hours Online</p>
            </div>
            <div className='text-center'>
                <i className="text-3xl mb-2 font-thin ri-speed-up-line"></i>
                <h5 className='text-lg font-medium'>10.2</h5>
                <p className='text-sm text-gray-600'>Hours Online</p>
            </div>
            <div className='text-center'>
                <i className="text-3xl mb-2 font-thin ri-booklet-line"></i>
                <h5 className='text-lg font-medium'>10.2</h5>
                <p className='text-sm text-gray-600'>Hours Online</p>
            </div>
        </div>
    </div>
  )
}

export default CaptainDetails