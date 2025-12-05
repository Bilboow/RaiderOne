import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const ConfirmRidePopUp = ({setConfirmRidePopupPanel,setRidePopupPanel,ride}) => {

    const [otp,setOTP] = useState('');
    const navigate = useNavigate();

    const submitHandler = async(e)=>{
        e.preventDefault();
        setOTP('');

        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/rides/start-ride`,{
          params:{
            rideId:ride._id,
            otp:otp
          },
          headers:{
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })

        if(response.status === 200){
          setConfirmRidePopupPanel(false)
          setRidePopupPanel(false)
          navigate('/captain-riding',{state: {ride:ride}})
        }
    }

  return (
    <div>
        <h5 className='p-3 text-xl absolute top-0 right-2' onClick={()=>{
            setConfirmRidePopupPanel(false)
        }}><i className="ri-arrow-down-wide-line"></i></h5>
        <h2 className='text-2xl font-semibold mb-5'>Confirm ride to Start!</h2>

        <div className='flex items-center justify-between mt-4 p-3 rounded-lg bg-yellow-300'>
            <div className='flex items-center gap-3 '>
                <img className='h-13 w-13 rounded-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSlI6xULlQNl5BDeL9i9xCPotiF3zJz4_Tbw&s" alt="person1" />
                <h2 className='text-lg font-medium'>{ride?.user.fullname.firstname+" "+ride?.user.fullname.lastname}l</h2>
            </div>
            <h5 className='text-lg font-semibold'>2.5 KM</h5>
        </div>

        <div className='flex gap-2 items-center flex-col justift-between'>
          <div className='w-full mt-5 bg-gray-100 rounded-xl'>
              <div className='flex items-center gap-5 p-3 border-b-1 border-gray-200'>
                <i className="text-lg ri-map-pin-user-fill"></i>
                <div>
                  <h2 className='text-lg font-medium'>Pickup</h2>
                  <p className='text-gray-500 text-sm -mt-1'>{ride?.pickup}</p>
                </div>
              </div>

              <div className='flex items-center gap-5 p-3 border-b-1 border-gray-200'>
                <i className="text-lg ri-map-pin-2-fill"></i>
                <div>
                  <h2 className='text-lg font-medium'>Destination</h2>
                  <p className='text-gray-500 text-sm -mt-1'>{ride?.destination}</p>
                </div>
              </div>

              <div className='flex items-center gap-5 p-3 '>
                <i className="ri-wallet-line"></i>
                <div>
                  <h2 className='text-lg font-medium'>₹{ride?.fare}</h2>
                  <p className='text-gray-500 text-sm -mt-1'>Cash Cash</p>
                </div>
              </div>
          </div>
          <div className='mt-6 w-full'> 
            <form onSubmit={submitHandler}>
                <input type="text" placeholder='Enter OTP' className='bg-[#eee] font-mono px-12 py-2 text-lg rounded-lg w-full mt-3' onChange={(e)=>setOTP(e.target.value)} value={otp} />
                <button className='flex items-center justify-center w-full mt-5 bg-green-600 text-white font-semibold rounded-lg px-1 py-2'>Confirm</button>
                <button onClick={()=>{
                    setConfirmRidePopupPanel(false)
                    setRidePopupPanel(false)
                    }} className='w-full mt-1 bg-red-500 text-white font-semibold rounded-lg px-1 py-2'>Cancel</button>
            </form>
          </div>  
        </div>
    </div>
  )
}

export default ConfirmRidePopUp