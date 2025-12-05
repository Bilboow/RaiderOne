import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const FinishRide = ({setFinishRidePanel,rideData}) => {

  const navigate = useNavigate()

  async function endRide(){
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/end-ride`,{
      rideId:rideData._id
    },{
      headers:{
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    if (response.status === 200) {
      
      navigate('/captain-home')
    }
  }

  return (
    <div>
        <h5 className='p-3 text-xl absolute top-0 right-2' onClick={()=>{
            setFinishRidePanel(false)
        }}><i className="ri-arrow-down-wide-line"></i></h5>
        <h2 className='text-2xl font-semibold mb-5'>Finish this ride!</h2>

        <div className='flex items-center justify-between mt-4 p-3 rounded-lg bg-orange-300'>
            <div className='flex items-center gap-3 '>
                <img className='h-13 w-13 rounded-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSlI6xULlQNl5BDeL9i9xCPotiF3zJz4_Tbw&s" alt="person1" />
                <h2 className='text-lg font-medium'>{rideData?.user.fullname.firstname+" "+rideData?.user.fullname.lastname}</h2>
            </div>
            <h5 className='text-lg font-semibold'>2.5 KM</h5>
        </div>

        <div className='flex gap-2 items-center flex-col justift-between'>
          <div className='w-full mt-5 bg-gray-100 rounded-xl'>
              <div className='flex items-center gap-5 p-3 border-b-1 border-gray-200'>
                <i className="text-lg ri-map-pin-user-fill"></i>
                <div>
                  <h2 className='text-lg font-medium'>Pickup</h2>
                  <p className='text-gray-500 text-sm -mt-1'>{rideData?.pickup}</p>
                </div>
              </div>

              <div className='flex items-center gap-5 p-3 border-b-1 border-gray-200'>
                <i className="text-lg ri-map-pin-2-fill"></i>
                <div>
                  <h2 className='text-lg font-medium'>Destination</h2>
                  <p className='text-gray-500 text-sm -mt-1'>{rideData?.destination}</p>
                </div>
              </div>

              <div className='flex items-center gap-5 p-3 '>
                <i className="ri-wallet-line"></i>
                <div>
                  <h2 className='text-lg font-medium'>₹{rideData?.fare}</h2>
                  <p className='text-gray-500 text-sm -mt-1'>Cash Cash</p>
                </div>
              </div>
          </div>
          <div className='mt-6 w-full'> 
            <button 
            onClick={endRide}
            className='flex items-center justify-center w-full mt-5 bg-green-600 text-white font-semibold rounded-lg px-1 py-2'>Finish ride</button>
          </div>  
        </div>
    </div>
  )
}

export default FinishRide